export default function GameBoard ({onSelectSquare, board}) {
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         // we should work on this new variable instead of using the old one
    //         // because it will cause some problems with references
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedBoard[rowIndex][colIndex] = {activePlayerSymbol};
    //         return updatedBoard;
    //     });

    //     onSelectSquare();
    // }

    return <ol id="game-board">
        {board.map((row, rowIndex) => 
            (<li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => 
                        (<li key={colIndex}>
                            <button 
                                onClick={() => onSelectSquare(rowIndex, colIndex)} 
                                disabled={playerSymbol != null ? false : true}
                            >
                                {playerSymbol}
                            </button>
                        </li>))
                    }
                </ol>
            </li>))
        }
    </ol>
}
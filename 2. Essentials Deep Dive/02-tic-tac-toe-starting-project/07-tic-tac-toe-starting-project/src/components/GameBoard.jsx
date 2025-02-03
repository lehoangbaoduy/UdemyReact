

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard ({onSelectSquare, turns}) {
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

    let gameBoard = initialGameBoard;
    
    for (const turn of turns) {
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player;
    }

    return <ol id="game-board">
        {gameBoard.map((row, rowIndex) => 
            (<li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => 
                        (<li key={colIndex}>
                            <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                        </li>))
                    }
                </ol>
            </li>))
        }
    </ol>
}
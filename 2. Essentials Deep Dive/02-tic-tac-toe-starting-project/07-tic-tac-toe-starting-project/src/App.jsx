import { useState } from "react"

import Player from "./components/Player"
import GameBoard from "./components/Gameboard"
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./winning_combinations";

const PLAYERS = {
  'X': 'Player 1',
  'O': 'Player 2'
}

const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

function deriveActivePlayer (gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player == 'X') {
    currentPlayer = '0';
  }
  
  return currentPlayer;
}

function deriveWinner (gameBoard, players) {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstSquareSymbol &&
        firstSquareSymbol == secondSquareSymbol &&
        firstSquareSymbol == thirdSquareSymbol) {
          winner = players[firstSquareSymbol];
    }
  }
  
  return winner;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];
  
  for (const turn of gameTurns) {
      const {square, player} = turn;
      const {row, col} = square;

      gameBoard[row][col] = player;
  }
  
  return gameBoard;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS)
  const [gameTurns, setGameTurns] = useState([]);
  
  const activePlayer = deriveActivePlayer(gameTurns);  
  const winner = deriveWinner(gameBoard, players);
  const gameBoard = deriveGameBoard(gameTurns);
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare (rowIndex, colIndex) {
    // we don't need activePlayer state anymore because it's already been computed in gameTurns
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        {square: {row: rowIndex, col: colIndex}, player: currentPlayer},
        ...prevTurns
      ];

      return updatedTurns;
    });
  }

  function handleRestart () {
    setGameTurns([]);
  }

  function handlePlayerNameChanged (symbol, newName) {
    setPlayers((prevPlayer) => {
      return {
        ...prevPlayer,
        [symbol]: newName
      }
    });
  }

  return <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player 
          initialName={PLAYERS.X} 
          symbol="X" 
          isActive={gameTurns.player == 'X'}
          onChangeName={handlePlayerNameChanged}
        />    
        <Player 
          initialName={PLAYERS.O} 
          symbol="O" 
          isActive={gameTurns.player == 'O'}
          onChangeName={handlePlayerNameChanged}
        />    
      </ol>
      {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
      <GameBoard 
        onSelectSquare={handleSelectSquare} 
        turns={gameTurns}
        board={gameBoard}
      />
    </div>
    <Log turns={gameTurns}/>
  </main>
}

export default App

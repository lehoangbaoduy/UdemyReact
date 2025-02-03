import { useState } from "react"

import Player from "./components/Player"
import GameBoard from "./components/Gameboard"
import Log from "./components/Log";

function deriveActivePlayer (gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player == 'X') {
    currentPlayer = '0';
  }
  
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // we don't need activePlayer state anymore because it's already been computed in gameTurns
  //const [activePlayer, setActivePlayer] = useState('X');

  const activePlayer = deriveActivePlayer(gameTurns);

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

  return <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName="Player 1" symbol="X" isActive={gameTurns.player == 'X'}/>    
        <Player initialName="Player 2" symbol="O" isActive={gameTurns.player == 'O'}/>    
      </ol>
      <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
    </div>
    <Log turns={gameTurns}/>
  </main>
}

export default App

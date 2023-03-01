import { useEffect, useState } from 'react';
import './App.scss';
import Pvp from './components/Pvp';
import Pvc from './components/Pvc';

function App() {
  const [currentVal, setCurrentVal] = useState('X');
  const [gameMode, setGameMode] = useState('');
  const [table, setTable] = useState(['', '', '', '', '', '', '', '', '']);
  const [finalString, setFinalString] = useState('');
  const [winner, setWinner] = useState(false);
  const gameVals = [
    [table[0], table[1], table[2]],
    [table[3], table[4], table[5]],
    [table[6], table[7], table[8]],
    [table[0], table[3], table[6]],
    [table[1], table[4], table[7]],
    [table[2], table[5], table[8]],
    [table[0], table[4], table[8]],
    [table[2], table[4], table[6]],
  ];

  const areEqual = () => {
    gameVals.forEach((vals) => {
      if (
        vals.every((el) => {
          if (el === 'X') {
            return true;
          }
          return 0;
        })
      ) {
        setFinalString('X Won, Good Game!');
        setWinner(true);
      } else if (
        vals.every((el) => {
          if (el === 'O') {
            return true;
          }
          return 0;
        })
      ) {
        setFinalString('O Won, Good Game!');
        setWinner(true);
      }
    });
    if (winner === false) {
      if (
        table.every((el) => {
          if (el === 'O' || el === 'X') {
            return true;
          }
          return 0;
        })
      ) {
        setFinalString('Draw!');
        setWinner(true);
      }
    }
  };

  const playerMove = (currCell, currInd) => {
    if (winner === false) {
      if (currCell === '') {
        setTable(table.map((cell, index) => (index !== currInd ? cell : currentVal)));
        // setCurrentVal(currentVal === 'X' ? 'O' : 'X');
      }
    }
    randomGen();
  };

  const changeCell = (currCell, currInd) => {
    if (winner === false) {
      if (currCell === '') {
        setTable(table.map((cell, index) => (index !== currInd ? cell : currentVal)));
        setCurrentVal(currentVal === 'X' ? 'O' : 'X');
      }
    }
  };

  const randomGen = () => {
    const generatedNum = Math.floor(Math.random() * table.length);
    console.log(generatedNum);
    // console.log(table);
    // if (table[generatedNum] === '') {
    setTable(table.map((cell, index) => (index !== generatedNum ? cell : 'O')));
    // } else {
    //   randomGen();
    // }
  };

  const resetGame = () => {
    setTable(['', '', '', '', '', '', '', '', '']);
    setCurrentVal('X');
    setFinalString('');
    setWinner(false);
  };

  useEffect(() => {
    // randomGen(table);
    areEqual();
  }, [table, currentVal]);

  return (
    <div className="app-container">
      <h1 className="app-title">
        <span className="title-one">Tic</span>
        <span className="title-two">Tac</span>
        <span className="title-three">Toe</span>
      </h1>

      <div style={{ color: '#fff' }}>
        <div>
          <h3>Player vs PC</h3>
          <button onClick={() => setGameMode('pvc')}>Play</button>
        </div>
        <div>
          <h3>Player vs Player</h3>
          <button onClick={() => setGameMode('pvp')}>Play</button>
        </div>
      </div>
      <div className={winner === true ? 'result-container' : 'result-container-none'}>
        <h1 className={finalString.includes('X') ? 'final-string-blue' : 'final-string-pink'}>{finalString}</h1>
        <button className="reset-btn" onClick={() => resetGame()}>
          RESTART
        </button>
      </div>

      {gameMode === 'pvp' ? (
        <Pvp table={table} changeCell={changeCell} winner={winner} />
      ) : gameMode === 'pvc' ? (
        <Pvc table={table} playerMove={playerMove} winner={winner} setTable={setTable} />
      ) : (
        ''
      )}
    </div>
  );
}

export default App;

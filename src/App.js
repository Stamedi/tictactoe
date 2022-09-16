import { useEffect, useState } from 'react';
import './App.scss';

function App() {
  const [currentVal, setCurrentVal] = useState('X');
  const [table, setTable] = useState([
    '','','','','','','','',''
  ])
  const [finalString, setFinalString] = useState('')
  const [winner, setWinner] = useState(false)
  const gameVals = [
    [table[0], table[1], table[2]],
    [table[3], table[4], table[5]],
    [table[6], table[7], table[8]],
    [table[0], table[3], table[6]],
    [table[1], table[4], table[7]],
    [table[2], table[5], table[8]],
    [table[0], table[4], table[8]],
    [table[2], table[4], table[6]],
    
  ]

  const areEqual = async (gameVals) => {
    await gameVals.forEach((vals) => {
        if (vals.every((el) => {
          if (el === 'X') {
            return true;
          }
          return 0;
        })) {
          setFinalString('X Won, Good Game!')
          setWinner(true)
        } else if (
          vals.every((el) => {
            if (el === 'O') {
              return true;
            }
            return 0;
          })
        ) {
          setFinalString('O Won, Good Game!')
          setWinner(true)
        }
      })
      if (winner === false) {
        if (
          table.every((el) => {
            if (el === 'O' || el === 'X') {
              return true;
            }
            return 0;
          })
        ) {
          setFinalString('Draw!')
          setWinner(true)
        }
      }
  }

  const resetGame = () => {
    setTable(['','','','','','','','',''])
    setCurrentVal('X')
    setFinalString('')
    setWinner(false)
  }

  const changeCell = async (currCell, currInd) => {
    if (winner === false) {
      if (currCell === '') {
        await setTable(table.map((cell, index) => index !== currInd ? cell : currentVal))
        setCurrentVal(currentVal === 'X' ? 'O' : 'X')
      } 
    }
  }

  useEffect(() => {
    areEqual(gameVals)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [table, currentVal]) 
  

  return (
    <div className="app-container">
    <h1 className='app-title'>
    <span className='title-one'>Tic</span><span className='title-two'>Tac</span><span className='title-three'>Toe</span></h1>
      
      <div className={winner === true ? "result-container" : 'result-container-none'}>
        <h1 className={finalString.includes('X') ? 'final-string-blue' : 'final-string-pink'}>{finalString}</h1>
        <button className='reset-btn' onClick={() => resetGame()}>RESTART</button>
      </div>
      
      <div className={winner === true ? 'game-container-won' : 'game-container'} >
        {table.map((cell, index) => 
        <div onClick={() => changeCell(cell, index)} key={index} className="cell" id={"id" + index}>
          {cell === 'X' && <svg height='100%' width='100%' className="cross-container"><line x1="25%" y1="25%" x2="75%" y2="75%" className='line' /><line x1="25%" y1="75%" x2="75%" y2="25%" className='line2' /></svg> } {cell === 'O' && <svg height='100%' width='100%'> <circle cx="50%" cy="50%" r="30%" className='circle'/></svg>}
        </div>)}
      </div>
    </div>
  );
}

export default App;

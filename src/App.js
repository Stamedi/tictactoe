import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [currentVal, setCurrentVal] = useState('X');
  const [table, setTable] = useState([
    '','','','','','','','',''
  ])
  const [xWin, setXWin] = useState(false)
  const [oWin, setOWin] = useState(false)
  const [finalString, setFinalString] = useState('')
  const gameVals = [
    [table[0], table[1], table[2]],
    [table[3], table[4], table[5]]
  ]

  const areEqual = (gameVals) => {
      gameVals.forEach((vals) => {
        const resX = vals.every((el) => {
          if (el === 'X') {
            return true;
          }
        });
        const resO = vals.every((el) => {
          if (el === 'O') {
            return true;
          }
        });
        console.log(resX)
      })
      // setXWin(resX)
      // setOWin(resO)
      console.log(gameVals)
      setFinalString()
      // console.log(res)
  }

const resetGame = () => {
  setTable(['','','','','','','','',''])
  setXWin(false)
  setOWin(false)
  setCurrentVal('X')
}

  const changeCell = async (currInd) => {
    await setTable(table.map((cell, index) => index !== currInd ? cell : currentVal))
    setCurrentVal(currentVal === 'X' ? 'O' : 'X')
    // if (gameVals.every((val) => val !== 'X' ) !== []) {
    //   console.log("Game Over")
    // }
  }
  

  useEffect(() => {
    areEqual(gameVals)
  }, [table])
  
// console.log(table)
  return (
    <div className="app-container">
    {xWin === false && oWin === false ?
        <div className="game-container">
          {table.map((cell, index) => <div onClick={() => changeCell(index)} key={index} className="cell">{cell}</div>)}
        </div>
    :
    <button onClick={() => resetGame()}>RESTART</button>
    }    
    </div>
  );
}

export default App;

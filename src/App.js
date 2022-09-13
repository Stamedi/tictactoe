import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [currentVal, setCurrentVal] = useState('X');
  const [table, setTable] = useState([
    '','','','','','','','',''
  ])
<<<<<<< HEAD
  const 
  // const currentVal = 'X';
  // const table = [
  //   {id:1, value:''},{id:2, value:''},{id:3, value:''},{id:4, value:''},{id:5, value:''},{id:6, value:''},{id:7, value:''},{id:8, value:''},{id:9, value:''},
  // ];
  const checkGame = () => {
    table.map((cell) => {
      if (cell.)
    })

=======
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
>>>>>>> 404fedda68e51b2bdc1d8559ac0820f1bed06473
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
  
  // [1,2,3] [4,5,6] [7,8,9]

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

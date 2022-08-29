import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [currentVal, setCurrentVal] = useState('X');
  const [table, setTable] = useState([
    {id:1, value:''},{id:2, value:''},{id:3, value:''},{id:4, value:''},{id:5, value:''},{id:6, value:''},{id:7, value:''},{id:8, value:''},{id:9, value:''},
  ])
  // const currentVal = 'X';
  // const table = [
  //   {id:1, value:''},{id:2, value:''},{id:3, value:''},{id:4, value:''},{id:5, value:''},{id:6, value:''},{id:7, value:''},{id:8, value:''},{id:9, value:''},
  // ];



  const changeCell = (id) => {
    setTable(table.map((cell) => cell.id !== id ? cell : {id: id, value: currentVal}))
    setCurrentVal(currentVal === 'X' ? 'O' : 'X')
  }
  

  // useEffect(() => {
  //   console.log(table)
  // }, [table])
  
console.log(table)
  return (
    <div className="app-container">
      <div className="game-container">
        {table.map((cell) => <div onClick={() => changeCell(cell.id)} key={cell.id} className="cell">{cell.value}</div>)}
      </div>
    </div>
  );
}

export default App;

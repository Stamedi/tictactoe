import React, { useEffect } from 'react';

const Pvc = ({ table, playerMove, winner }) => {
  // useEffect(() => {
  //   const randomGen = () => {
  //     const generatedNum = Math.floor(Math.random() * table.length);
  //     console.log(generatedNum);
  //     console.log(table);
  //     if (table[generatedNum] === '') {
  //       setTable(table.map((cell, index) => (index !== generatedNum ? cell : 'O')));
  //     }
  //   };
  //   randomGen();
  // }, [table]);

  return (
    <div className={winner === true ? 'game-container-won' : 'game-container'}>
      {table.map((cell, index) => (
        <div onClick={() => playerMove(cell, index)} key={index} className="cell" id={'id' + index}>
          {cell === 'X' && (
            <svg height="100%" width="100%" className="cross-container">
              <line x1="25%" y1="25%" x2="75%" y2="75%" className="line" />
              <line x1="25%" y1="75%" x2="75%" y2="25%" className="line2" />
            </svg>
          )}
          {cell === 'O' && (
            <svg height="100%" width="100%">
              <circle cx="50%" cy="50%" r="30%" className="circle" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
};

export default Pvc;

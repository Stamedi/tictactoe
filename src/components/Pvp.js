import React from 'react';

const Pvp = ({ table, changeCell, winner }) => {
  return (
    <div className={winner === true ? 'game-container-won' : 'game-container'}>
      {table.map((cell, index) => (
        <div onClick={() => changeCell(cell, index)} key={index} className="cell" id={'id' + index}>
          {cell === 'X' && (
            <svg height="100%" width="100%" className="cross-container">
              <line x1="25%" y1="25%" x2="75%" y2="75%" className="line" />
              <line x1="25%" y1="75%" x2="75%" y2="25%" className="line2" />
            </svg>
          )}{' '}
          {cell === 'O' && (
            <svg height="100%" width="100%">
              {' '}
              <circle cx="50%" cy="50%" r="30%" className="circle" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
};

export default Pvp;

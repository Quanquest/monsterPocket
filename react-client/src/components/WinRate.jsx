import React from 'react';

const WinRate = ({battles, wins}) => {
  return (
    <div>
        <h3>Win Rate: {((wins / battles).toFixed(2) * 100).toString() + '%'}</h3>
    </div>
  )
}

export default WinRate;

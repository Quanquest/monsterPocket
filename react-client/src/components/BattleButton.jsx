import React from 'react';

const BattleButton = (props) => {
  return (
    <div>
      <button type="button" onClick={props.toggleBattleReady}>FIGHT!</button>
    </div>
  )
}

export default BattleButton;

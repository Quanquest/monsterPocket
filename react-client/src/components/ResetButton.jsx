import React from 'react';

const ResetButton = (props) => {
  return (
    <div>
      <button type="button" onClick={props.resetBattle}>RESET</button>
    </div>
  )
}

export default ResetButton;

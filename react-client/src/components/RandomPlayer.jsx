import React from 'react';
import pokedex from '../data/pokedex.js';
import StatBlock from './StatBlock.jsx';

const RandomPlayer = (props) => {

  return (
    <div>
      

      <StatBlock chosenMon={props.chosenMon} />
    </div>
  )
  
}

export default RandomPlayer;

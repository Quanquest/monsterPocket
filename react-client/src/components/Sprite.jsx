import React from 'react';
import pokedex from '../data/pokedex.js';

const Sprite = (props) => {
  let sprite = pokedex[props.pokemonName].gen7Sprite;
  return (
    <div>
      <img src={sprite} />
    </div>
  )
}

export default Sprite;

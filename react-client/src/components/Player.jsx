import React from 'react';
import pokedex from '../data/pokedex.js';
import StatBlock from './StatBlock.jsx';

const Player = (props) => (
  <div>
    <form onChange={props.handleChange}>
      <select>
        {
          Object.keys(pokedex).map((pokemonName) => {
            return <option key={pokedex[pokemonName].num.toString()}>
              {pokemonName}
            </option>
          })
        }
      </select>
    </form>
    <StatBlock chosenMon={props.chosenMon} />
  </div>
)

export default Player;

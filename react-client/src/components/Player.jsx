import React from 'react';
import pokemonNames from '../data/pokedex.js';

const Player = (props) => (
  <div>
    <form onChange={props.handleChange}>
      <select>
      {
          pokemonNames.map(function(pokemonName) {
            return <option>{pokemonName.species}</option>
          })
        }
      </select>
    </form>
  </div>
)

export default Player;
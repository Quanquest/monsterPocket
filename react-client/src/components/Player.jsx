import React from 'react';
import pokedex from '../data/pokedex.js';

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
  </div>
)

export default Player;

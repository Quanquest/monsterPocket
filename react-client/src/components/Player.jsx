import React from 'react';
import pokemonNames from '../data/pokedex.js';

const Player = (props) => (
  <div>
    <select>
    {
				pokemonNames.map(function(pokemonName) {
					return <option>{pokemonName.species}</option>
				})
			}
    </select>
  </div>
)

export default Player;
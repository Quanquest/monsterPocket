import React from 'react';
import ReactDOM from 'react-dom';
import pokedex from '../data/pokedex.js';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const StatBlock = (props) => {
  let species = pokedex[props.chosenMon].species;
  let sprite = pokedex[props.chosenMon].gen7Sprite;
  let type = capitalizeFirstLetter(pokedex[props.chosenMon].type);

  let hp = pokedex[props.chosenMon].baseStats.hp;
  let atk = pokedex[props.chosenMon].baseStats.atk;
  let def = pokedex[props.chosenMon].baseStats.def;
  let spa = pokedex[props.chosenMon].baseStats.spa;
  let spd = pokedex[props.chosenMon].baseStats.spd;
  let spe = pokedex[props.chosenMon].baseStats.spe;

  // const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div>
      <img src={sprite} />
      <h3>{species}</h3>
      <h4>Type: {type}</h4>
      <h4>Base Stats</h4>
      <ul>
        <li>Hit Points: {hp}</li>
        <li>Attack: {atk}</li>
        <li>Defense: {def}</li>
        <li>Special Attack: {spa}</li>
        <li>Special Defense: {spd}</li>
        <li>Speed: {spe}</li>
      </ul>
    </div>
  )
}

// ReactDOM.render(<StatBlock />, document.getElementById('app'));

export default StatBlock;





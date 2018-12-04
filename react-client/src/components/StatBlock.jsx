import React from 'react';
import ReactDOM from 'react-dom';
import pokedex from '../data/pokedex.js';
import styles from '../../style/style.css';

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
      <h3>Type: {type}</h3>
      <h3>Base Stats</h3>
      <div className={styles.statBlock}>
        <p>Hit Points: {hp}</p>
        <p>Attack: {atk}</p>
        <p>Defense: {def}</p>
        <p>Special Attack: {spa}</p>
        <p>Special Defense: {spd}</p>
        <p>Speed: {spe}</p>
      </div>
    </div>
  )
}

// ReactDOM.render(<StatBlock />, document.getElementById('app'));

export default StatBlock;





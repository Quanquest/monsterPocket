import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Player from './components/Player.jsx';
import BattleButton from './components/BattleButton.jsx';
import Sprite from './components/Sprite.jsx';
// import StatBlock from './components/StatBlock.jsx';
import styles from '../style/style.css';

import pokedex from './data/pokedex.js';
import type from './data/type.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      redMon: 'Bulbasaur',
      blueMon: 'Bulbasaur',
      battleReady: false,
      result: 'Prepare for glorious battle!',
      show: false,
    }
    this.handleRedChange = this.handleRedChange.bind(this);
    this.handleBlueChange = this.handleBlueChange.bind(this);
    this.toggleBattleReady = this.toggleBattleReady.bind(this);
    this.chooseWinner = this.chooseWinner.bind(this);
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/items', 
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

  // showModal = () => {
  //   this.setState({ show: true });
  // }
  // hideModal = () => {
  //   this.setState({ show: false });
  // }

  handleRedChange(event) {
    this.setState({redMon: event.target.value});
  }
  handleBlueChange(event) {
    this.setState({blueMon: event.target.value});
  }
  toggleBattleReady() {
    this.setState({battleReady: !this.state.battleReady})
  }

  chooseWinner() {
    let redType = pokedex[this.state.redMon].type;
    let blueType = pokedex[this.state.blueMon].type;
    let redAdv = type[redType].strongAgainst.includes(blueType);
    let blueAdv = type[blueType].strongAgainst.includes(redType);
    if (redAdv && !blueAdv) {
      this.setState({result: 'Red Team wins!'})
    }
    if (!redAdv && blueAdv) {
      this.setState({result: 'Blue Team wins!'})
    }
    if ((redAdv && blueAdv) || (!redAdv && !blueAdv)) {
      this.setState({result: 'Draw!'})
    }
  }

  render () {
    return (
      <div>
        <h1>Monster Pocket!</h1>
        <div className={styles.gridContainer}>
          <div className={styles.player1}>
            <h4>RED TEAM</h4>
            <label>
              Choose your Pokémon!
              <Player handleChange={this.handleRedChange} chosenMon={this.state.redMon} />
            </label>
          </div>

          <div className={styles.vs}>
          VERSUS
          </div>

          <div className={styles.player2}>
            <h4>BLUE TEAM</h4>
            <label>
            Choose your Pokémon!
            <Player handleChange={this.handleBlueChange} chosenMon={this.state.blueMon} />
            </label>        
          </div>
        </div>

        <BattleButton toggleBattleReady={this.toggleBattleReady, this.chooseWinner} />
        <h2>{this.state.result}</h2>


      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

// <StatBlock pokemonName={this.state.redMon} />   
// <StatBlock pokemonName={this.state.blueMon} />   
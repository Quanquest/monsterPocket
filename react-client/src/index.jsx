import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Player from './components/Player.jsx';
import RandomPlayer from './components/RandomPlayer.jsx';
import BattleButton from './components/BattleButton.jsx';
import ResetButton from './components/ResetButton.jsx';
import WinRate from './components/WinRate.jsx';
import styles from '../style/style.css';

import pokedex from './data/pokedex.js';
import type from './data/type.js';
import { set } from 'mongoose';

let pokemonList = Object.keys(pokedex);
let randomNum = () => {
  return Math.floor(Math.random() * pokemonList.length);
} 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      redMon: 'Bulbasaur',
      blueMon: 'Bulbasaur',
      result: 'Prepare for glorious battle!',
      show: false,
      battles: 15,
      wins: 5,
      losses: 13,
      draws: 2
    }
    this.handleRedChange = this.handleRedChange.bind(this);
    this.handleBlueChange = this.handleBlueChange.bind(this);
    this.toggleBattleReady = this.toggleBattleReady.bind(this);
    this.chooseWinner = this.chooseWinner.bind(this);
    this.resetBattle = this.resetBattle.bind(this);
    this.sendNew = this.sendNew.bind(this);
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


  componentDidMount() {
    this.setState({blueMon: pokemonList[randomNum()]});
  }


  handleRedChange(event) {
    this.setState({redMon: event.target.value});
  }
  handleBlueChange(event) {
    this.setState({blueMon: event.target.value});
  }
  toggleBattleReady() {
    this.setState({battleReady: true})
  }
  resetBattle() {
    this.setState({
      battleReady: false,
      result: 'Prepare for glorious battle!',
      blueMon: pokemonList[randomNum()],
    })
  }
  sendNew() {
    this.setState({
      blueMon: pokemonList[randomNum()],
    });
  }

  recordWin() {
    this.setState({
      battles: this.state.battles + 1,
      wins: this.state.wins + 1,
    })
  }
  recordLoss() {
    this.setState({
      battles: this.state.battles + 1,
      losses: this.state.losses + 1,
    })
  }
  recordDraw() {
    this.setState({
      battles: this.state.battles + 1,
      draws: this.state.draws + 1,
    })
  }

  chooseWinner() {
    let redType = pokedex[this.state.redMon].type;
    let blueType = pokedex[this.state.blueMon].type;
    let redAdv = type[redType].strongAgainst.includes(blueType);
    let blueAdv = type[blueType].strongAgainst.includes(redType);
    if (redAdv && !blueAdv) {
      this.recordWin();
      this.setState({result: 'Ash wins!'});
    }
    if (!redAdv && blueAdv) {
      this.recordLoss();
      this.setState({result: 'Rival wins! Smell ya later, Ash!'})
    }
    if ((redAdv && blueAdv) || (!redAdv && !blueAdv)) {
      this.recordDraw();
      this.setState({result: 'Draw!'})
    }
  }

  render () {
    return (
      <div className={styles.page}>
        <div className={styles.title}>
          <h1>Monster Pocket!</h1>
        </div>
        <div className={styles.gridContainer}>
          <div className={styles.player1}>
            <h4>TRAINER ASH</h4>
            <label>
              Choose your Pokémon!
              <Player handleChange={this.handleRedChange} chosenMon={this.state.redMon} />
            </label>
            <WinRate battles={this.state.battles} wins={this.state.wins} />
          </div>

          <div className={styles.vs}>
          <h1>VERSUS</h1>
          </div>

          <div className={styles.player2}>
            <h4>RIVAL TRAINER</h4>
            <label>
            <RandomPlayer chosenMon={this.state.blueMon} />
            </label>        
          </div>
        </div>

        <BattleButton toggleBattleReady={this.chooseWinner} />
        <ResetButton resetBattle={this.resetBattle} />
        <div className={styles.result}>
          <h2>{this.state.result}</h2>
        </div>
        


      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

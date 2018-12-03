import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Player from './components/Player.jsx';
// import Winner from './components/Winner.jsx';
import BattleButton from './components/BattleButton.jsx';
import Sprite from './components/Sprite.jsx';
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
    // make a variable that binds componenet that tells win or lose
    // let winner;
    // if (this.state.battleReady) {
    //   winner = <div>{this.state.result}</div>
    // } else {
    //   winner = <div>Prepare for glorious battle!</div>
    // }
    // if (this.state.winner.length === 0) {
    //   winner = <div></div>;
    // } else if (redAdv && !blueAdv) {
    //   winner = <div>'Red Team wins!'</div>;
    // }
    // if (!redAdv && blueAdv) {
    //   this.setState({result: 'Blue Team wins!'})
    // }
    // if ((redAdv && blueAdv) || (!redAdv && !blueAdv)) {
    //   this.setState({result: 'Draw!'})
    // }
    return (
      <div>
        <h1>Monster Pocket!</h1>
        <div className={styles.gridContainer}>
          <div className={styles.player1}>
            <h4>RED TEAM</h4>
            <label>
              Choose your Pokémon!
              <Player handleChange={this.handleRedChange} />
              <Sprite pokemonName={this.state.redMon} />
            </label>
          </div>

          <div className={styles.vs}>
          VERSUS
          </div>

          <div className={styles.player2}>
            <h4>BLUE TEAM</h4>
            <label>
            Choose your Pokémon!
            <Player handleChange={this.handleBlueChange} />
            <Sprite pokemonName={this.state.blueMon} />
            </label>        
          </div>
        </div>
        <BattleButton toggleBattleReady={this.toggleBattleReady, this.chooseWinner} />
        {this.state.result}


      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

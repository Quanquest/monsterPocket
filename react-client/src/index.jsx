import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Player from './components/Player.jsx';
import styles from '../style/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      player: '',
      redMon: '',
      blueMon: '',
    }
    

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

  render () {
    return (<div>
      <h1>Monster Pocket - Battle!</h1>
      <div className={styles.gridContainer}>
        <div className={styles.player1}>
          <h4>RED TEAM</h4>
          <label>
            Choose your Pokémon!
            <Player handleChange={this.handleRedChange.bind(this)} />
          </label>
        </div>

        <div className={styles.vs}>
        VERSUS
        </div>

        <div className={styles.player2}>
          <h4>BLUE TEAM</h4>
          <label>
          Choose your Pokémon!
          <Player handleChange={this.handleBlueChange.bind(this)} />
          </label>        
        </div>
      </div>


    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
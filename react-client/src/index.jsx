import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Player from './components/Player.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      player: ''
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

  render () {
    return (<div>
      <h1>Monster Pocket - Battle!</h1>
      <Player />
      <Player />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
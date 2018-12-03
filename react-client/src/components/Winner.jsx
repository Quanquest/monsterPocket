import React from 'react';
import pokedex from '../data/pokedex.js';
import type from '../data/type.js';

class Winner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
      redType: pokedex[this.props.redMon].type,
      blueType: pokedex[this.props.blueMon].type,
      redAdv: type[pokedex[this.props.redMon].type].strongAgainst.includes(pokedex[this.props.blueMon].type),
      blueAdv: type[pokedex[this.props.blueMon].type].strongAgainst.includes(pokedex[this.props.redMon].type),
    }

  } 

  componentDidMount() {
    this.chooseWinner();
  }

  chooseWinner() {
    let redType = pokedex[this.props.redMon].type;
    let blueType = pokedex[this.props.blueMon].type;
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

  render() {
    {
        return (
          <div>
            {this.state.result}
          </div>
        )
    }
  }
}

export default Winner;

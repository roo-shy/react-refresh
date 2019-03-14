import React, {Component} from 'react';

class Board extends Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}

export default Board;
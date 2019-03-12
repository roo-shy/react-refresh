import React, {Component} from 'react';

class Board extends component.React {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}

export default Board;
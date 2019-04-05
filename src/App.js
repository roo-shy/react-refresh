import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';
// import Square from './Square';
// import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  state = {
    characters: []
      };

  removeCharacter = index => {
      const { characters } = this.state;

      this.setState({
          characters: characters.filter((character, i) => {
              return i !== index;
          })
      });
  }

  handleSubmit = character => {
    this.setState({characters: [...this.state.characters, character]});
  }


  render() {
      const { characters } = this.state;
      const status = 'Next player: X';

      return (
          <div className="container">
            {/* <BrowserRouter>
            <div>
              <Route exact={true} path='/' render={() => (
                <div className="App"> */}
                  {/* <Home /> */}
                {/* </div>
              )}/>
              <Route exact={true} path='/signin' render={() => (
                <div className="App"> */}
                  {/* <SignIn /> */}
                {/* </div>
              )}/>
              <Route exact={true} path='/signup' render={() => (
                <div className="App"> */}
                  {/* <SignUp /> */}
                {/* </div> */}
              {/* )}/> */}
            {/* </div> */}
           {/* </BrowserRouter> */}
              <Table
                  characterData={characters}
                  removeCharacter={this.removeCharacter}
              />
              <Form handleSubmit={this.handleSubmit} />
            <div className="status">{status}</div>
            <div className="board-row">
              {/* {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)} */}
            </div>
            <div className="board-row">
              {/* {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)} */}
            </div>
            <div className="board-row">
              {/* {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)} */}
            </div>
        </div>
      );
   }
}


export default App;

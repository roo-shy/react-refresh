import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';
import Board from './Board';
import Square from './Square';
import {BrowserRouter, Route} from 'react-router-dom';

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

      return (
          <div className="container">
            <BrowserRouter>
            <div>
              <Route exact={true} path='/' render={() => (
                <div className="App">
                  {/* <Home /> */}
                </div>
              )}/>
              <Route exact={true} path='/signin' render={() => (
                <div className="App">
                  {/* <SignIn /> */}
                </div>
              )}/>
              <Route exact={true} path='/signup' render={() => (
                <div className="App">
                  {/* <SignUp /> */}
                </div>
              )}/>
            </div>
          </BrowserRouter>
              <Table
                  characterData={characters}
                  removeCharacter={this.removeCharacter}
              />
              <Form handleSubmit={this.handleSubmit} />
          </div>
      );
   }
}


export default App;

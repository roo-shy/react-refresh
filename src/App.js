import React, {Component} from 'react';
import Table from './Table';

removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
        characters: characters.filter((character, i) => {
            return i !== index;
        })
    });
}


class App extends Component {
  state = {
    characters: [
            {
                'name': 'Charlie',
                'job': 'Janitor'
            },
            {
                'name': 'Mac',
                'job': 'Bouncer'
            },
            {
                'name': 'Dee',
                'job': 'Aspring actress'
            },
            {
                'name': 'Dennis',
                'job': 'Bartender'
            }
        ];

        return (
            <div className="container">
                <Table characterData={characters} />
            </div>
        );
    }
}

export default App;

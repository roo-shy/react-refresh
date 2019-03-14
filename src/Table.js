import React, {Component} from 'react';
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>City</th>
                <th>Country</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.first}</td>
                <td>{row.last}</td>
                <td>{row.company}</td>
                <td>{row.email}</td>
                <td>{row.phone}</td>
                <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

class Table extends Component {
    render() {
        const { characterData, removeCharacter } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody
                  characterData={characterData}
                  removeCharacter={removeCharacter}
                 />
            </table>
        );
    }
}


export default Table;
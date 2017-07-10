import React from 'react';

export default class Hole extends React.Component {
    constructor({ row, value, position, onSetHole }) {
        super();

        this.state = {
            value : this.value
        }

        this.handleChange = this.handleChange.bind(this);
        this.onSetHole = onSetHole.bind(this);
        this.row = row;
        this.position = position;
    }

    handleChange(event) {
        this.setState({value : event.target.value});
        this.onSetHole({row : this.row.id, position: this.position, value: event.target.value})
    }
    render() {
        return (
            <select value={this.state.value} onChange={this.handleChange}>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
        )
    }
}

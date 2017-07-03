import React from 'react';

export default class Hole extends React.Component {
    constructor() {
        super();
        this.state = {
            value : 'verde'
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value : event.target.value});
    }
    render() {
        return (
            <select value={this.state.value} onChange={this.handleChange}>
                <option value="rosso">rosso</option>
                <option value="verde">verde</option>
            </select>
        )
    }
}

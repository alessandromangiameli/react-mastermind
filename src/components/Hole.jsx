import React from 'react';

export default class Hole extends React.Component {
    constructor(props) {
        super();
        this.state = {
            value : 'verde'
        }
        this.props = props;

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value : event.target.value});
    }
    render() {
        return (
            <select value={this.state.value} onChange={this.handleChange}>
                <option value="rosso">rosso {this.props.value}</option>
                <option value="verde">verde {this.props.value}</option>
            </select>
        )
    }
}

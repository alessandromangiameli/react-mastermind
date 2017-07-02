import React from 'react';
import ReactDOM from 'react-dom';
import Board from 'components/Board';

export default class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>test</h1>
                <Board />
            </div>
        )
    }
}
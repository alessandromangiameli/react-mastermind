import React from 'react';
import ReactDOM from 'react-dom';
import Row from 'components/Row';

export default class Board extends React.Component {
    constructor() {
        super();
    }

    getRows() {
        let rows = [];
        for (let i = 0; i < 7; i++) {
            rows.push((<Row key={i}></Row>));
        }
        return rows;
    }

    render() {
        let rows = this.getRows();

        return (
            <div className="board">
                <h1>Board</h1>
                {
                    rows
                }
            </div>
        )
    }

}
import React from 'react';
import ReactDOM from 'react-dom';
import Row from 'components/Row';

let renderRows = (nRows) => {
    nRows++;
    let rows = [];
    for (let i = 0; i < nRows; i++) {
        rows.push((<Row key={i}></Row>));
    }
    return rows;
};

const Board = ({rows, onAddRowClick}) => (
    <div className="board">
        
        <h1>Board</h1>

        <a href="#" onClick={(e) => {
                    e.preventDefault();
                    onAddRowClick();
                }}>Add row</a>

        {
            renderRows(rows.length)
        }

    </div>
)

export default Board;
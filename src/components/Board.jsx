import React from 'react';
import ReactDOM from 'react-dom';
import Row from 'components/Row';

const Board = ({rows, onAddRowClick}) => (
    <div className="board">
        
        <h1>Board</h1>

        <a href="#" onClick={(e) => {
                    e.preventDefault();
                    onAddRowClick();
                }}>
            Add row
        </a>

        {
            rows.map((item) => {
                return(<Row key={item.id} row={item}/>)
            })
        }

    </div>
)

export default Board;
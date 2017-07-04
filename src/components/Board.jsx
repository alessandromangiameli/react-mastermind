import React from 'react';
import ReactDOM from 'react-dom';
// import Row from 'components/Row';
import RowContainer from 'containers/RowContainer';

const Board = ({rows}) => (
    <div className="board">
        
        <h2>Game board component</h2>
        {
            rows.map((item) => {
                return(<RowContainer key={item.id} row={item}/>)
            })
        }

    </div>
)

export default Board;
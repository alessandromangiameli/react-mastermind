import React from 'react';
import HoleContainer from 'containers/HoleContainer';

const Row = ({row, onAddRowClick}) => (
    <div className="row">
        row {row.id}
        {
            row.holes.map((item, key) => {
                return (<HoleContainer key={key} row={row} value={item} position={key}/>)
            })
        }
        <a href="#" onClick={(e) => {
                    e.preventDefault();
                    onAddRowClick();
                }}>
            check
        </a>
    </div>
)

export default Row;
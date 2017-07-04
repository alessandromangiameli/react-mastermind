import React from 'react';
import Hole from 'components/Hole';

const Row = ({row, onAddRowClick}) => (
    <div className="row">
        row {row.id}
        {
            row.holes.map((item, key) => {
                return (<Hole key={key} row={row} value={item}/>)
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
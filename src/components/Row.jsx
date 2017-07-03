import React from 'react';
import Hole from 'components/Hole';

const Row = (props) => (
    <div className="row">
        row {props.row.id}
        {
            props.row.holes.map((item, key) => {
                return (<Hole key={key} row={props.row} value={item}/>)
            })
        }
    </div>
)

export default Row;
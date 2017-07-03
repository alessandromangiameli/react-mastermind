import React from 'react';
import Hole from 'components/Hole';

// export default class Row extends React.Component {
//     constructor() {
//         super();
//     }

//     renderHoles() {
//         let holes = [];
//         for(let i = 0; i < 4; i++) {
//             holes.push((<Hole key={i}></Hole>))
//         }
//         return holes;
//     }

//     render() {
//         return (
//             <div className="row">
//                 { this.renderHoles() }
//             </div>
//         )
//     }
// }

const holes = [
    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 3,
    },
    {
        id: 4,
    }
];

const Row = (props) => (
    <div className="row">
        {
            holes.map((item) => {
                return (<Hole key={item.id} row={props.row}/>)
            })
        }
    </div>
)

export default Row;
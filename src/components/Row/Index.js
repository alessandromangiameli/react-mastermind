import React from 'react';
import Hole from 'components/Hole';

export default class Row extends React.Component {
    constructor() {
        super();
    }

    renderHoles() {
        let holes = [];
        for(let i = 0; i < 4; i++) {
            holes.push((<Hole key={i}></Hole>))
        }
        return holes;
    }

    render() {
        return (
            <div className="row">
                { this.renderHoles() }
            </div>
        )
    }
}
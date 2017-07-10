import React from 'react';
import HoleContainer from 'containers/HoleContainer';
import Result from 'components/Result';

export default class Row extends React.Component {
    constructor(props) {
        super();
        this.state = {
            row : props.row
        };
        this.onAddRowClick = props.onAddRowClick.bind(this);
        this.onAddRowClickWrapper = this.onAddRowClickWrapper.bind(this);
    }

    onAddRowClickWrapper() {
        this.onAddRowClick();
        // this.setState({
        //     row : this.props.row
        // });
    }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps);
        this.setState({
            row : nextProps.row
        });
    }

    render() {

        let resultComponent = Object.keys(this.state.row.results).length ? <Result results={this.state.row.results} /> : false;

        return (
            <div className="row">
                row {this.state.row.id}
                {   
                    this.state.row.holes.map((item, key) => {
                        return (<HoleContainer key={key} row={this.state.row} value={item} position={key}/>)
                    })
                }
                {<a href="#" onClick={(e) => {
                            e.preventDefault();
                            this.onAddRowClickWrapper();
                        }}>
                    check
                </a>
                }
                
                {resultComponent}
            </div>
        )
    }
}





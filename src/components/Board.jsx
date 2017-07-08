import React from 'react';
import ReactDOM from 'react-dom';
// import Row from 'components/Row';
import RowContainer from 'containers/RowContainer';

class Board extends React.Component {
    constructor(props) {
        super();
        this.state = {
            rows : props.rows
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            rows : nextProps.rows
        });

        if(nextProps.win) {
            alert('win');
        } else {
            alert('no win');
        }
    }

    render() {
        return (
            <div className="board">
                <h2>Game Board Component {this.props.code}</h2>
                {
                    this.state.rows.map((item) => {
                        return(<RowContainer key={item.id} row={item}/>)

                    })
                }
            </div>
            
        )
    }
}
export default Board;
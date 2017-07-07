import React from 'react';
import ReactDOM from 'react-dom';
// import Row from 'components/Row';
import RowContainer from 'containers/RowContainer';

// const Board = ({rows}) => (
//     <div className="board">
        
//         <h2>Game board component</h2>
//         {
//             rows.map((item) => {
//                 return(<RowContainer key={item.id} row={item}/>)
//             })
//         }

//     </div>
// )

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
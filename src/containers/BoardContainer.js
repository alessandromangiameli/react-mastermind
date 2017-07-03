import { connect } from 'react-redux';
import Board from 'components/Board';
import { addRow } from 'reducers/gameActions';

const mapStateToProps = (state) => {
    return state.game
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddRowClick : () => {
            dispatch(addRow())
        }
    }
}

const BoardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Board);

export default BoardContainer;
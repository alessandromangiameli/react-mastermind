import { connect } from 'react-redux';
import Board from 'components/Board';

const mapStateToProps = (state) => {
    return state.game
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const BoardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Board);

export default BoardContainer;
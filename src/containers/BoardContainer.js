import { connect } from 'react-redux';
import Board from 'components/Board';

const mapStateToProps = (state) => {
    console.log(state);
    return {
        rows: state.game
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const BoardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Board);

export default BoardContainer;
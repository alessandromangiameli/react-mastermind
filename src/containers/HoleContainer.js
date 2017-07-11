import { connect } from 'react-redux';
import Hole from 'components/Hole';
import { setHole } from 'reducers/gameActions';

const mapStateToProps = (state, ownProps) => {
    return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSetHole : (hole) => {
            dispatch(setHole({hole}));
        }
    }
}

const HoleContainer = connect(mapStateToProps, mapDispatchToProps)(Hole);

export default HoleContainer;
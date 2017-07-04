import { connect } from 'react-redux';
import Row from 'components/Row';
import { addRow } from 'reducers/gameActions';

const mapStateToProps = (state, ownProps) => {
    console.log(state, ownProps, state.game.rows[ownProps.row.id]);
    return state.game.rows[ownProps.row.id]
    
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddRowClick : () => {
            dispatch(addRow())
        }
    }
} 

const RowContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Row);

export default RowContainer;
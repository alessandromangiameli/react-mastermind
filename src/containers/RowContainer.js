import { connect } from 'react-redux';
import Row from 'components/Row';
import { addRow, checkRow } from 'reducers/gameActions';

const mapStateToProps = (state, ownProps) => {
    return state.game.rows[ownProps.row.id]    
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddRowClick : () => {
            dispatch(checkRow({row : ownProps.row}))
        }
    }
} 

const RowContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Row);

export default RowContainer;
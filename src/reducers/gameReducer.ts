import { addRow, generateCode, hasWin, validateRow } from 'services/gameService';
import { Row, RowFilter, Results, Action, State } from 'services/GameServiceDefinition';

export const gameReducer = (state: State = {}, action: Action) => {

    if(!state.code) {
        state.code = generateCode();
        state.rows = addRow([]);
        state.hasWin = false;
    }

    switch(action.type) {

        case 'ROW_ADD':
            return Object.assign({}, state, {
                rows : addRow(state.rows)
            });
        
        case 'ROW_CHECK':
            let row = action.payload.row;
            return Object.assign({}, state, {
                win : hasWin(row.holes, state.code),

                //add a row and add results to current row
                rows : addRow(state.rows
                            .slice(0,row.id)
                            .concat(validateRow(state.rows[row.id], state.code))
                            .concat(state.rows.slice(row.id + 1))
                        )
            });

        case 'HOLE_SET': 
            let hole = action.payload.hole;
            let newState = Object.assign({}, state);
            newState.rows[hole.row].holes[hole.position] = parseInt(hole.value);
            return newState;

        default:
            return state;
    }
}



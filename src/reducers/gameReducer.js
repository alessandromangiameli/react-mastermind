// import GameService from 'services/GameService';
import IoC from 'services/serviceContainer';

// let service = new GameService();
let gameService = IoC.container.gameService;

export const gameReducer = (state = {}, action) => {

    if(!state.code) {
        state.code = gameService.generateCode();
        state.rows = [
            gameService.makeRow(0)
        ]
    }

    switch(action.type) {

        case 'ROW_ADD':
            return Object.assign({}, state, {
                rows : [
                    ...state.rows,
                    gameService.makeRow(state.rows.length)
                ]
            });
        
        case 'ROW_CHECK':
            let row = gameService.checkRow(action.payload.row);
            if(row.status) {
                alert('win')
            } else {

                let newState = Object.assign({}, state, {
                    rows: [
                        ...state.rows
                    ]
                });
                newState.rows[newState.rows.length - 1] = row;
                newState.rows.push(gameService.makeRow(state.rows.length));
                return newState;
            }

        case 'HOLE_SET': 
            let hole = action.payload.hole;
            let newState = Object.assign({}, state);
            newState.rows[hole.row].holes[hole.position] = hole.value;
            return newState;

        default:
            return state;
    }
}



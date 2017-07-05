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
                return Object.assign({}, state, {
                    rows: [
                        ...state.rows,
                        gameService.makeRow(state.rows.length)
                    ]
                });
            }

        default:
            return state;
    }
}



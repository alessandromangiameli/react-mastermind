// import GameService from 'services/GameService';
import IoC from 'services/serviceContainer';

// let service = new GameService();
let gameService = IoC.container.gameService;

export const gameReducer = (state = {}, action) => {

    if(!state.code) {
        state.code = gameService.generateCode();
        state.rows = [
            gameService.makeRow(1)
        ]
    }

    switch(action.type) {

        case 'ADD_ROW':
            return Object.assign({}, state, {
                rows : [
                    ...state.rows,
                    gameService.makeRow(state.rows.length + 1)
                ]
            })

        default:
            return state;
    }
}



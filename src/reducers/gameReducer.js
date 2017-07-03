// import GameService from 'services/GameService';
import IoC from 'services/serviceContainer';

export const gameReducer = (state = {}, action) => {

    if(!state.code) {
        // let service = new GameService();
        let service = IoC.container.gameService;
        state.code = service.generateCode();
        state.rows = [{
            id : 1
        }];
        state.test = 'test';
    }

    switch(action.type) {

        case 'ADD_ROW':
            return Object.assign({}, state, {
                rows : [
                    ...state.rows,
                    {
                        id : state.rows.length + 1
                    }
                ]
            })

        default:
            return state;
    }
}



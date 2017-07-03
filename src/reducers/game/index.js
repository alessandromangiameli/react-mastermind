import GameService from 'services/GameService';

export const reducer = (state = [], action) => {

    if(!state.code) {
        let service = new GameService();
        state.code = service.generateCode();
    }

    switch(action.type) {
        default:
            return state;
    }
}



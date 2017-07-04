import Bottle from 'bottlejs';
import GameService from 'services/gameService';

let IoC = new Bottle();

// IoC.service('gameService', GameService);
IoC.factory('gameService', (container) => {
    return new GameService;
});

export default IoC;
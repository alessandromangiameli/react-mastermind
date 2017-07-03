import Bottle from 'bottlejs';
import GameService from 'services/GameService';

let IoC = new Bottle();

// IoC.service('gameService', GameService);
IoC.factory('gameService', (container) => {
    return new GameService;
});

export default IoC;
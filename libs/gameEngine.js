'use strict';

import { v4 as uuidv4 } from 'uuid';
import GameState from '@/libs/gameState';


class GameEngine {

    constructor() { }

    new(data) {
        const game_id = uuidv4();
        return GameState(game_id, data);
    }

    load() { }

    undo(steps) { }

    play({card, bid, auto}) { }

    nextStep(runs) { }

}

export default new GameEngine();
'use strict';

import GameEngine from '@/libs/gameEngine';


class GameAPIs {

    constructor() { }

    async newGame(data) {
        return GameEngine.new(data);
    }

    async newGameSettings(data) {
        return GameEngine.newSettings(data);
    }

    async loadSavedGame() {
        return;
    }

    async saveGame() {
        return;
    }

    async loadGame() {
        return;
    }

    async undo(steps) {
        // (steps || 1);
        return;
    }

    async play({card, bid, auto}) {
        // {card, bid, auto}
        return;
    }

    async nextStep(runs) {
        // (runs || 1)
        return;
    }

}

export default new GameAPIs();
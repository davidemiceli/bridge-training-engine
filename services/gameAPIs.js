'use strict';

import GameEngine from '@/libs/gameEngine';


class GameAPIs {

    constructor() {
        this.storeKey = 'game-state';
    }

    _storeGameState(data) {
        localStorage.setItem(this.storeKey, JSON.stringify(data));
    }

    _getGameState() {
        const data = localStorage.getItem(this.storeKey);
        const s = JSON.parse(data);
        return GameEngine.load(s);
    }

    async getGame() {
        return this._getGameState();
    }

    async newGame(data) {
        const s = GameEngine.new(data);
        this._storeGameState(s);
        return s
    }

    async newGameSettings(data) {
        // return GameEngine.newSettings(data);
        throw Error('Not implemented yet!');
    }

    async loadSavedGame() {
        throw Error('Not implemented yet!');
    }

    async saveGame() {
        throw Error('Not implemented yet!');
    }

    async loadGame() {
        throw Error('Not implemented yet!');
    }

    async undo(steps) {
        const stepCount = (steps || 1);
        const s = this._getGameState();
        for (let i=0; i < stepCount; i++) s.undo();
        const nextS = GameEngine.play(s, {});
        this._storeGameState(nextS);
        return nextS;
    }

    async play({newTimer, card, bid, auto}) {
        const s = this._getGameState();
        const nextS = GameEngine.play(s, {card, bid, auto});
        nextS.setTimerClock(newTimer);
        this._storeGameState(nextS);
        return nextS;
    }

    async nextStep(runs) {
        // (runs || 1)
        throw Error('Not implemented yet!');
    }

}

export default new GameAPIs();
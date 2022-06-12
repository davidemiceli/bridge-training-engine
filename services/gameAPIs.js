import DbHandler from '@/libs/dbHandler';
import GameEngine from '@/libs/gameEngine';
import Table from '@/libs/classes/table';


class GameAPIs {

    constructor() { }

    async getGame() {
        const s = DbHandler.getGameState();
        return GameEngine.load(s);
    }

    async newGame(data) {
        const s = GameEngine.new(data);
        DbHandler.storeGameState(s);
        return s
    }

    async getSettings() {
        return DbHandler.getSettings();
    }

    async updateSettings(data) {
        DbHandler.storeSettings(data);
        return DbHandler.getSettings();
    }

    async getTable() {
        const t = DbHandler.getTable();
        return new Table(t);
    }

    async resetTable() {
        const t = await this.getTable();
        t.reset();
        DbHandler.storeTable(t);
        return DbHandler.getTable();
    }

    async newTable(owner) {
        const t = await this.getTable();
        t.addOwner(owner);
        DbHandler.storeTable(t);
        return DbHandler.getTable();
    }

    async updateTable(data) {
        DbHandler.storeTable(data);
        return DbHandler.getTable();
    }

    async updateUiPlayOptions(data) {
        const s = await this.getGame();
        s.updateUiPlayOptions(data);
        DbHandler.storeGameState(s);
        return s;
    }

    async loadGame(data) {
        const s = GameEngine.load(data);
        DbHandler.storeGameState(s);
        return s
    }

    async undo(steps) {
        const stepCount = (steps || 1);
        const s = await this.getGame();
        for (let i=0; i < stepCount; i++) s.undo();
        const nextS = GameEngine.play(s, {});
        DbHandler.storeGameState(nextS);
        return nextS;
    }

    async play({newTimer, card, bid, auto}) {
        const s = await this.getGame();
        const nextS = GameEngine.play(s, {card, bid, auto});
        nextS.setTimerClock(newTimer);
        DbHandler.storeGameState(nextS);
        return nextS;
    }

    async autoContract() {
        const s = await this.getGame();
        const nextS = GameEngine.autoContract(s);
        DbHandler.storeGameState(nextS);
        return nextS;
    }

    async nextStep(runs) {
        // (runs || 1)
        throw Error('Not implemented yet!');
    }

}

export default new GameAPIs();
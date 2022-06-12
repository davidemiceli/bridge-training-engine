
export default new class {

    constructor() {
        this.storeGameKey = 'game-state';
        this.storeSettingsKey = 'game-settings';
        this.storeTableKey = 'game-table';
    }

    storeSettings(data) {
        localStorage.setItem(this.storeSettingsKey, JSON.stringify(data));
    }

    getSettings() {
        const data = localStorage.getItem(this.storeSettingsKey);
        return data ? JSON.parse(data) : {};
    }

    storeTable(data) {
        localStorage.setItem(this.storeTableKey, JSON.stringify(data));
    }

    getTable() {
        const data = localStorage.getItem(this.storeTableKey);
        return data ? JSON.parse(data) : {};
    }

    storeGameState(data) {
        localStorage.setItem(this.storeGameKey, JSON.stringify(data));
    }

    getGameState() {
        const data = localStorage.getItem(this.storeGameKey);
        return JSON.parse(data);
    }

}

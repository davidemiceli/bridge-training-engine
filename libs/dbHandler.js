
const dbStorage = ((typeof(window) !== 'undefined') && window.localStorage) || {getItem: function(k) { return this[k]; }, setItem: function(k) { return this[k]; } };

export default new class {

    constructor() {
        this.storeGameKey = 'game-state';
        this.storeSettingsKey = 'game-settings';
        this.storeTableKey = 'game-table';
    }

    storeSettings(data) {
        dbStorage.setItem(this.storeSettingsKey, JSON.stringify(data));
    }

    getSettings() {
        const data = dbStorage.getItem(this.storeSettingsKey);
        return data ? JSON.parse(data) : {};
    }

    storeTable(data) {
        dbStorage.setItem(this.storeTableKey, JSON.stringify(data));
    }

    getTable() {
        const data = dbStorage.getItem(this.storeTableKey);
        return data ? JSON.parse(data) : {};
    }

    storeGameState(data) {
        dbStorage.setItem(this.storeGameKey, JSON.stringify(data));
    }

    getGameState() {
        const data = dbStorage.getItem(this.storeGameKey);
        return JSON.parse(data);
    }

}

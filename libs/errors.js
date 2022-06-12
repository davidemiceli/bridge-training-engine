
export default class GameError extends Error {
    constructor(message) {
        super(message);
        this.name = "GameError";
    }
}

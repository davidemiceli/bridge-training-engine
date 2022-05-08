
export default class RuleError extends Error {
    constructor(message) {
        super(message);
        this.name = "RuleError";
    }
}

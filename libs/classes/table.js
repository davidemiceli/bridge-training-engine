import { v4 as uuidv4 } from 'uuid';
import GameHelpers from '@/libs/gameHelpers';


export default class {

    constructor(data) {
        const version = 0.1;
        if (data.id === undefined) this.id = uuidv4();
        if (data.version && data.version != version) throw Error('Incompatible settings version.');
        this.version = version;
        this.owner = null;
        this.players = {};
        if (data) {
            Object.assign(this, data);
        }
    }

    addOwner(owner) {
        this.owner = owner;
    }

    addPlayers(data) {
        for (const {username, players, role, embodyRules} of data) {
            if (!username || !players || !role) throw Error('table.addPlayer: missing one parameter.');
            this.players[username] = {username, players, role, embodyRules};
        }
    }

    removePlayer(username) {
        delete this.players[username];
    }

    reset() {
        this.owner = null;
        this.players = {};
    }

}

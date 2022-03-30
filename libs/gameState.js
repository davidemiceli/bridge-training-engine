'use strict';


export default class {

    constructor(id, settings) {
        this.id = id;
        this.settings = settings;
        this.status_msg = [];
        this.bids = [];
        this.contract = null;
        this.cards = [];
        this.tricks = [];
        this.score = [];
        this.loop_players = [];
        this.current_player = null;
        this.contract_was_defined = false;
        this.loop_cards = [];
    }

    setCurrentPlayer(player_id) {
        this.current_player = player_id;
    }
    
    setCurrentLoop(loop) {
        this.loop_players = loop;
    }
}

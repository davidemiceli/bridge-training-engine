import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import GameHelpers from '@/libs/gameHelpers';
import Player from '@/libs/classes/player';


export default class {

    constructor(data) {
        const version = 0.1;
        if (data.id === undefined) this.id = uuidv4();
        if (data.timer_clock === undefined) this.timer_clock = moment().set({hour:0, minute:0, second:0, millisecond:0});
        if (data.version && data.version != version) throw Error('Incompatible game version.');
        this.version = version;
        this.settings = {};
        this.status_msg = [];
        this.bids = [];
        this.contract = null;
        this.cards = [];
        this.tricks = [];
        this.score = [];
        this.loop_players = [];
        this.current_player = null;
        if (data) {
            Object.assign(this, data);
            this.addPlayers(data.players || []);
        }
    }

    addPlayers(players) {
        this.players = players.map(p => {
            const partnerId = GameHelpers.getPartnerId(p.id);
            const partner = GameHelpers.getPlayer(players, partnerId);
            return new Player(p);
        });
    }

    updateUiPlayOptions(data) {
        this.settings.uiPlayOptions = Object.assign(this.settings.uiPlayOptions, data);
    }

    setTimerClock(newTimer) {
        this.timer_clock = moment(newTimer);
    }

    setCurrentPlayer(player_id) {
        this.current_player = player_id;
    }
    
    setCurrentLoop(loop) {
        this.loop_players = loop;
    }

    addCard(card) {
        this.cards.push(card);
        return card;
    }

    addBid(bid) {
        this.bids.push(bid);
    }

    addContract(contract) {
        this.contract = contract;
    }

    resetBids() {
        this.bids = [];
    }

    updateTricks(tricks) {
        this.tricks = tricks.map(t => [...t]);
    }

    updateScore(score) {
        this.score = [...score];
    }

    contractWasDefined() {
        return !(this.contract == null);
    }

    tricksCount() {
        return parseInt(this.cards.length / 4);
    }

    loopCards() {
        // Get loop cards, the last grouped 4 cards
        const chunked = GameHelpers.chunk(this.cards, 4);
        return chunked.length > 0 ? chunked.slice(-1)[0] : [];
    }

    completedLoopsCards() {
        const chunked = GameHelpers.chunk(this.cards, 4);
        return chunked.filter(t => t.length == 4);
    }

    currentPlayedCards() {
        // Get loop cards, the last grouped 4 cards
        const loopCards = this.loopCards();
        return loopCards.length < 4 ? loopCards : [];
    }

    undo() {
        // Undo last state action
        const bidCount = this.bids.length;
        if (!this.contractWasDefined() && bidCount > 0) {
            if (bidCount == 1) this.setCurrentPlayer(this.bids[0].player_id);
            this.bids.pop();
            this.players.forEach(p => p.resetDummy());
            return;
        }
        if (this.contractWasDefined() && this.cards.length == 0) {
            this.contract = null;
            this.bids.pop();
            return;
        }
        if (this.contractWasDefined() && this.cards.length > 0) {
            if (this.cards.length == 52) this.score = [];
            const playerId = String(this.cards.slice(-1)[0].player_id);
            for (const p of this.players) {
                if (p.id == playerId) {
                    p.cards.push(this.cards.pop());
                    p.cards.sort((a, b) => a.suit.localeCompare(b.suit) || (b.value - a.value));
                }
            }
            return;
        }
    }
}

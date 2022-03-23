'use strict';

import { mapGetters, mapActions } from 'vuex';

// Constants
const player_nexts = {north: 'east', east: 'south', south: 'west', west: 'north'};
const player_partners = {south: 'north', west: 'east', north: 'south', east: 'west'};
const suit_symbols = {diamonds: '♦', clubs: '♣', hearts: '♥', spades: '♠', notrump: 'nt'};
const value_symbols = {'11': 'J', '12': 'Q', '13': 'K', '14': 'A'};
const card_unicode = {
    // Spades
    spades14: '🂡', spades2: '🂢', spades3: '🂣', spades4: '🂤', spades5: '🂥', spades6: '🂦', spades7: '🂧', spades8: '🂨',
    spades9: '🂩', spades10: '🂪', spades11: '🂫', spades12: '🂭', spades13: '🂮',
    // Hearts
    hearts14: '🂱', hearts2: '🂲', hearts3: '🂳', hearts4: '🂴', hearts5: '🂵', hearts6: '🂶', hearts7: '🂷', hearts8: '🂸',
    hearts9: '🂹', hearts10: '🂺', hearts11: '🂻', hearts12: '🂽', hearts13: '🂾',
    // Diamonds
    diamonds14: '🃁', diamonds2: '🃂', diamonds3: '🃃', diamonds4: '🃄', diamonds5: '🃅', diamonds6: '🃆', diamonds7: '🃇',
    diamonds8: '🃈', diamonds9: '🃉', diamonds10: '🃊', diamonds11: '🃋', diamonds12: '🃍', diamonds13: '🃎',
    // Clubs
    clubs14: '🃑', clubs2: '🃒', clubs3: '🃓', clubs4: '🃔', clubs5: '🃕', clubs6: '🃖', clubs7: '🃗', clubs8: '🃘',
    clubs9: '🃙', clubs10: '🃚', clubs11: '🃛', clubs12: '🃝', clubs13: '🃞',
    // Hidden
    hidden: '🂠'
};

// Utilities
class GameHelpers {

    constructor() { }

    showError(err, alertModal) {
        const errmsg = typeof(err) == 'string' ? err : (err && err.response && err.response.data && err.response.data.message) || 'Internal server error, contact the administrator';
        alertModal.show(errmsg);
    }

    chunk(arr, len) {
        const chunks = [];
        const n = arr.length;
        let i = 0;
        while (i < n) chunks.push(arr.slice(i, i += len));
        return chunks;
      }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    gameStoreGetters() {
        return mapGetters({
            timerClock: 'game/timerClock',
            totalScore: 'game/totalScore',
            playerSettings: 'game/playerSettings',
            gameState: 'game/all',
            gameNotCreated: 'game/notCreated',
            gameStateExists: 'game/exists',
            players: 'game/players',
            playedCards: 'game/playedCards',
            bids: 'game/bids',
            tricks: 'game/tricks',
            handEnded: 'game/handEnded',
            score: 'game/score'
        });
    }

    gameStoreActions() {
        return mapActions({
            updateTimerClock: 'game/updateTimerClock',
            incrementTimerClock: 'game/incrementTimerClock',
            newGame: 'game/newGame',
            applyGameSettings: 'game/applyGameSettings',
            loadSavedGame: 'game/loadSavedGame',
            saveGame: 'game/saveGame',
            loadGame: 'game/loadGame',
            nextRuns: 'game/nextRuns',
            play: 'game/play',
            undo: 'game/undo'
        });
    }

    players() {
        return ['south', 'west', 'north', 'east'];
    }

    teams() {
        return ['north-south', 'east-west'];
    }

    loopPlayers(player_id) {
        return Array.from({length: 3}, () => null).reduce((acc, p) => {
            acc.push(String(player_nexts[acc.slice(-1)]));
            return acc;
        }, [player_id]);
    }

    bidTrumps() {
        return Object.keys(suit_symbols);
    }

    bidValues() {
        return Array.from(Array(8).keys()).filter(n => n > 0);
    }

    bids() {
        const bidTrumps = this.bidTrumps();
        let rank = 1;
        const acc = [];
        for (let n=0; n < 7; n++) {
            for (const t of bidTrumps) {
                const v = n + 1;
                acc.push({bid_id: `${v} ${t}`, trump: t, value: v, rank: rank});
                rank += 1;
            }
        }
        return acc;
    }

    bid_ranking() {
        const bids = this.bids();
        return bids.reduce((acc, b) => {
            acc[b.bid_id] = b.rank;
            return acc;
        }, {});
    }

    topBidRank(bids) {
        return Math.max(...bids.map(b => b.rank));
    }

    bid_is_lower(bid_id, bids) {
        const bid_ranking = this.bid_ranking();
        const max_rank = this.topBidRank(bids);
        return bid_ranking[bid_id] <= max_rank;
    }

    teamTricks(tricks) {
        const teams = this.teams();
        return teams.reduce((acc, team_id) => {
            acc[team_id] = (tricks && tricks.length > 0) ? tricks.filter(t => t.filter(c => c.winner && c.team_id == team_id).length).length : 0;
            return acc;
        }, {});
    }

    suits() {
        return Object.keys(suit_symbols).filter(s => s != 'notrump');
    }

    sortedSuits(trump) {
        const ordered = ['spades', 'hearts', 'clubs', 'diamonds'];
        if (trump == 'notrump') return ordered;
        return [trump, ...ordered.filter(suit => suit != trump)];
    }
  
    suitColor(suit) {
        return (suit === 'diamonds' || suit === 'hearts') ? 'red' : 'black';
    }

    suitIcon(card_suit) {
        const suit = suit_symbols[card_suit];
        if (suit) return suit;
        else throw Error(`Invalid suit: ${card_suit}`);
    }

    cardValueIcon(card_value) {
        if (card_value > 14) throw Error(`Invalid card value: ${card_value}`);
        const val = value_symbols[String(card_value)];
        return val ? val : card_value;
    }

    cardUnicode(card_id) {
        return card_unicode[card_id];
    }

    parseCardOrBidId(c_id, player_id) {
        return {
            suit: c_id.match(/[a-zA-Z]+/g)[0],
            value: c_id.match(/\d+/g)[0],
            player_id: player_id
        };
    }

    filterCardsByPlayerId(player_id, cards) {
        return cards.filter(c => c.player_id == player_id);
    }

    filterCardsBySuit(suit, cards) {
        return cards.filter(c => c.suit == suit).sort((a, b) => a.rank - b.rank);
    }

    getPlayerCards(players, player_id) {
        return (players.length > 0) ? players.filter(p => p.id == player_id)[0].cards : [];
    }

    getPlayer(players, player_id) {
        return (players.length > 0) ? players.filter(p => p.id == player_id)[0] : null;
    }

    getRandomPlayerId() {
        return this.shuffleArray(Object.keys(player_partners))[0];
    }

    getRandomOpponentId(player_id) {
        const partner_id = this.getPartnerId(player_id);
        const opponents = Object.keys(player_partners).filter(p_id => p_id != player_id && p_id != partner_id);
        return this.shuffleArray(opponents)[0];
    }

    getPartnerId(player_id) {
        return player_partners[player_id];
    }

    getPlayerTeam(player_id) {
        const teams = this.teams();
        return player_id ? teams.filter(t => new RegExp(player_id).test(t))[0] : null;
    }

    getOpponentTeam(player_id) {
        return this.getPlayerTeam(this.getRandomOpponentId(player_id));
    }

    equalTeam(player_one, player_two) {
        return this.getPlayerTeam(player_one) === this.getPlayerTeam(player_two);
    }

    randomItemFromArray(items) {
        return items[Math.floor(Math.random() * items.length)];
    }

    randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    shuffleArray(list) {
        for (let i = list.length -1; i > 0; i--) {
            const j = Math.floor(Math.random() * i);
            const k = list[i];
            list[i] = list[j];
            list[j] = k;
        }
        return list;
    }

    tricksByTeamPoints(points) {
        if (points >= 20 && points <= 22) return 1
        else if (points >= 23 && points <= 24) return 2
        else if (points >= 25 && points <= 27) return 3
        else if (points >= 28 && points <= 30) return 4
        else if (points >= 31 && points <= 32) return 5
        else if (points >= 33 && points <= 36) return 6
        else if (points >= 37) return 7
        else return 0
    }

    getGameCustoms() {
        const players = this.players();
        return {
            bidding: 'manual',
            cards: [],
            playground: 'classic-playground',
            display_cards_top_team: false,
            display_cards_contract_team: false,
            players: players.reduce((acc, p) => {
                acc[p] = {show_cards: 'yes', show_points: 'no'};
                return acc;
            }, {})
        };
    }

    calculatePlayerPoints(player_id, cards) {
        if (!cards) return 0;
        return cards.filter(c => c.player_id == player_id && c.value > 10).reduce((acc, c) => acc + (c.value - 10), 0);
    }

    getTopTeamPlayer(cards) {
        const points = (this.players()).map(p => ({
            player: p,
            team: this.getPlayerTeam(p),
            points: cards.filter(c => c.player_id == p && c.value > 10).reduce((acc, c) => acc + (c.value - 10), 0)
        }));
        const teams_points = points.reduce((a, p) => {
            if (!(p.team in a)) a[p.team] = 0;
            a[p.team] += p.points; 
            return a;
        }, {});
        const tp = Object.keys(teams_points).map(t => ({team: t, points: teams_points[t]}));
        tp.sort((a, b) => a.points - b.points);
        const top_team = tp[1].team;
        points.sort((a, b) => a.points - b.points);
        const top_player = points.filter(p => p.team == top_team)[1].player;
        return top_player;
    }

    getTopTeamByPoints(cards) {
        if (cards.length == 0) return [this.teams()[0], 0];
        const team_score_acc = (this.teams()).reduce((a, t) => { a[t] = 0; return a; }, {});
        const teams_points = cards.reduce((a, c) => {
            const team = this.getPlayerTeam(c.player_id);
            a[team] += c.value > 10 ? (c.value - 10) : 0;
            return a;
        }, team_score_acc);
        const tp = Object.keys(teams_points).map(t => ({team: t, points: teams_points[t]}));
        tp.sort((a, b) => a.points - b.points);
        return [tp[1].team, tp[1].points];
    }

    randomizeCards(cards) {
        const n = Math.floor(Math.random() * 1000) + 1;
        for (const _ of Array.from(Array(n).keys())) {
            const random_kind = Math.random();
            if (random_kind >= 0 && random_kind <= 0.333) {
                cards = this.shuffleArray(cards);
            } else if (random_kind > 0.333 && random_kind <= 0.666) {
                cards.sort(() => Math.random() - 0.5);
            } else {
                cards.sort(() => Math.floor(Math.random() * 8) - 2);
            }
        }
        return cards;
    }

    randomCardDeck() {
        const players = this.players();
        let cards = [];
        const suits = this.shuffleArray(this.suits());
        for (const s of suits) {
            const suit_values = this.shuffleArray(Array.from(Array(15).keys()).slice(2));
            for (const v of suit_values) {
                cards.push({card_id: [s, v].join(''), suit: s, value: v, player_id: null});
            }
        }
        cards = this.randomizeCards(cards);
        const card_deck = [];
        while(cards.length) {
            for (const p_id of players) {
                const c = cards.pop();
                c.player_id = p_id;
                card_deck.push(c);
            }
        }
        return card_deck;
    }

    inferCards(decks, contract_data) {
        const contract = Object.assign({}, contract_data);
        const suits = this.shuffleArray(this.suits());
        const placeholders = ['x', 'y', 'z', 't'];
        const all_card_values = placeholders.reduce((acc, p) => {
            acc[p] = this.shuffleArray(Array.from(Array(15).keys()).slice(2));
            return acc;
        }, {});
        const suits_in_deck = {};
        const placeholders_in_deck = {};
        const cards = [];
        for (const [player_id, card_deck] of Object.entries(decks)) {
            for (const c of card_deck) {
                const c_suit = c.match(/[a-zA-Z]+/g)[0];
                const has_value = c.match(/\d+/g) ? true : false;
                const c_value =  (!has_value && !suits.includes(c_suit)) ? all_card_values[c_suit].pop() : parseInt(c.match(/\d+/g)[0]);
                if (suits.includes(c_suit)) suits_in_deck[c_suit] = true;
                if (placeholders.includes(c_suit)) placeholders_in_deck[c_suit] = true;
                cards.push({
                    card_id: [c_suit, c_value].join(''),
                    suit: c_suit,
                    value: c_value,
                    player_id: player_id
                });
            }
        }
        const only_ids = cards.map(c => c.card_id);
        if ((new Set(only_ids)).size !== only_ids.length) throw Error('Duplicated card values!');
        const deck_suits = Object.keys(suits_in_deck);
        const non_deck_suits = this.shuffleArray(suits.filter(s => !deck_suits.includes(s)));
        const suit_remapping = Object.keys(placeholders_in_deck).reduce((acc, s, i) => {
            acc[s] = non_deck_suits[i];
            return acc;
        }, {});
        // Remap suit placeholder in contract
        // let contract_item = null;
        if (contract && contract.bid) {
            const contract_suit = contract.bid.match(/[a-zA-Z]+/g)[0];
            if (contract_suit in suit_remapping) contract.bid = contract.bid.replace(contract_suit, suit_remapping[contract_suit]);
            // const [value, trump] = contract.bid.split(' ');
            // contract_item = {player_id: contract.player_id, value, trump};
        }
        // Remap suit placeholders in cards
        cards.forEach(c => {
            if (c.suit in suit_remapping) {
                c.card_id = c.card_id.replace(c.suit, suit_remapping[c.suit]);
                c.suit = suit_remapping[c.suit];
            }
        });
        return [contract, cards];
    }
};
  
export default new GameHelpers();
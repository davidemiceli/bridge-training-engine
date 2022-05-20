// Constants
const player_nexts = {north: 'east', east: 'south', south: 'west', west: 'north'};
const player_partners = {south: 'north', west: 'east', north: 'south', east: 'west'};
const suit_symbols = {diamonds: '♦', clubs: '♣', hearts: '♥', spades: '♠', notrump: 'nt'};
const suit_ranking = ['clubs', 'diamonds', 'hearts', 'spades', 'notrump'];
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
export default new class {

    constructor() { }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    showError(err, alertModal) {
        const errmsg = typeof(err) == 'string' ? err : (err && err.response && err.response.data && err.response.data.message) || 'Internal server error, contact the administrator';
        alertModal.show(errmsg);
    }

    permutations(arr) {
        const permArr = [], usedChars = [];
        const permute = input => {
            for (let i = 0; i < input.length; i++) {
              const ch = input.splice(i, 1)[0];
              usedChars.push(ch);
              if (input.length == 0) permArr.push(usedChars.slice());
              permute(input);
              input.splice(i, 0, ch);
              usedChars.pop();
            }
            return permArr;
        };
        return permute(arr);
    }

    combinations(items, m) {
        const arr = items.map(String);
        const max = (m || arr.length), min = 1;
        const combos = [...Array(max).keys()]
            .reduce(result => arr.concat(result.flatMap(val => arr.map(char => val + '|' + char))), [])
            .filter(val => val.length >= min);
        const notUnique = combos.map(v => v.split('|').sort()).map(v => v.join('|'));
        return Array.from(new Set(notUnique)).map(v => v.split('|')).filter(v => v.length == new Set(v).size);
    }

    chunk(arr, len) {
        const chunks = [];
        const n = arr.length;
        let i = 0;
        while (i < n) chunks.push(arr.slice(i, i += len));
        return chunks;
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

    getNextPlayer(player_id) {
        return player_nexts[player_id];
    }

    bidTrumps() {
        return suit_ranking.slice(0);
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

    bidRanking() {
        const bids = this.bids();
        return bids.reduce((acc, b) => {
            acc[b.bid_id] = b.rank;
            return acc;
        }, {});
    }

    topBidRank(bids) {
        return Math.max(...bids.map(b => b.rank));
    }

    bidIsLower(bid_id, bids) {
        const bid_ranking = this.bidRanking();
        const max_rank = this.topBidRank(bids);
        return bid_ranking[bid_id] <= max_rank;
    }

    teamTricks(tricks) {
        const teams = this.teams();
        return teams.reduce((acc, team_id) => {
            acc[team_id] = (tricks && tricks.length > 0) ? tricks.filter(t => {
                return t.filter(c => c.winner && c.team_id == team_id).length
            }).length : 0;
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

    createBidId(value, trump) {
        if (['double', 'redouble'].includes(value)) return value;
        return [0, 'pass'].includes(value) ? 'pass' : `${value} ${trump}`;
    }

    parseCardOrBidId(card_id, player_id) {
        return {
            suit: card_id.match(/[a-zA-Z]+/g)[0],
            value: card_id.match(/\d+/g)[0],
            player_id: player_id
        };
    }

    getLoopSuit(played_cards) {
        return played_cards[0] && played_cards[0].suit;
    }

    filterCardsByPlayerId(player_id, cards) {
        return cards.filter(c => c.player_id == player_id);
    }

    filterCardsBySuit(suit, cards) {
        return cards.filter(c => c.suit == suit).sort((a, b) => a.rank - b.rank);
    }

    hasCardsOfSuit(suit, cards) {
        return cards.filter(c => c.suit == suit).length > 0;
    }

    playerHoldsCard(cards, card) {
        return cards.filter(c => c.card_id == card.card_id).length > 0;
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

    getOpponentIds(player_id) {
        const partner_id = this.getPartnerId(player_id);
        return Object.keys(player_partners).filter(p_id => p_id != player_id && p_id != partner_id);
    }

    getRandomOpponentId(player_id) {
        return this.shuffleArray(this.getOpponentIds(player_id))[0];
    }

    getPartnerId(player_id) {
        return player_partners[player_id];
    }

    getPartner(player_id, players) {
        const partnerId = this.getPartnerId(player_id);
        return players.filter(p => p.id == partnerId)[0];
    }

    getPlayerTeam(player_id) {
        const teams = this.teams();
        return player_id ? teams.filter(t => new RegExp(player_id).test(t))[0] : null;
    }

    getOpponentTeam(player_id) {
        return this.getPlayerTeam(this.getRandomOpponentId(player_id));
    }

    getNextOpponentId(player_id) {
        return player_nexts[player_id];
    }

    getOpponentCards(player_id, players) {
        const partner_id = this.getPartnerId(player_id);
        const opponents = players.slice(0).filter(p => p.id != player_id && p.id != partner_id);
        return opponents[0].cards.concat(opponents[1].cards);
    }

    getNextOpponentCards(player_id, players) {
        const nextOpponentId = this.getNextOpponentId(player_id);
        return players.filter(p => p.id == nextOpponentId)[0].cards.slice(0);
    }

    getTeamCards(team_id, cards) {
        return cards.filter(c => this.getPlayerTeam(c.player_id) == team_id);
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

    calculateBonusScore(value, trump, kind) {
        // Evaluate contract bonus score
        if (value == 7) {
            // Big Slam bonus
            return ['Big Slam', kind == 'red' ? 1500 : 1000];
        } else if (value == 6) {
            // Small Slam bonus
            return ['Small Slam', kind == 'red' ? 750 : 500];
        } else if ((value >= 3 && trump == 'notrump') || (value >= 4 && ['hearts', 'spades'].includes(trump)) || (value >= 4 && ['diamonds', 'clubs'].includes(trump))) {
            // Manche bonus
            return ['Manche', kind == 'red' ? 500 : 300];
        } else {
            // Partial bonus
            return ['Partial', 50];
        }
    }

    evaluateTrickScore(trump, card) {
        if (card.team_trick_count < 7) return 0;
        if (trump == 'notrump') return card.team_trick_count == 7 ? 40 : 30;
        if (['hearts', 'spades'].includes(card.suit) && ['hearts', 'spades'].includes(trump)) return 30;
        else return 20;
    }

    tricksByTeamPoints(points) {
        if (points >= 20 && points <= 22) return 1;
        else if (points >= 23 && points <= 24) return 2;
        else if (points >= 25 && points <= 27) return 3;
        else if (points >= 28 && points <= 30) return 4;
        else if (points >= 31 && points <= 32) return 5;
        else if (points >= 33 && points <= 36) return 6;
        else if (points >= 37) return 7;
        else return 0;
    }

    getTrickWinnerCard(playedHandCards, suit, trump) {
        const cardsOfTrumpSuit = playedHandCards.filter(c => c.suit == trump);
        const cardsOfTurnSuit = playedHandCards.filter(c => c.suit == suit);
        const winnerCard = (cardsOfTrumpSuit.length == 0 ? cardsOfTurnSuit : cardsOfTrumpSuit).sort((a, b) => a.value - b.value).slice(-1)[0];
        return winnerCard;
    }

    getTrickWinner(trickCards) {
        // Get the player that won the trick
        return trickCards.filter(c => c.winner).map(c => c.player_id)[0];
    }

    getGameCustoms() {
        const players = this.players();
        return {
            bidding: 'manual',
            cards: [],
            uiPlayOptions: {
                auto_play: false,
                player_panel_data: false,
                other_player_cards: false
            },
            // playground: 'classic-playground',
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

    countCardsPoints(cards) {
        return cards.reduce((a, c) => a + (c.value > 10 ? (c.value - 10) : 0), 0);
    }

    randomizeCards(cards) {
        const n = Math.floor(Math.random() * 1000) + 1;
        for (const _ of Array.from(Array(n).keys())) {
            const randomKind = Math.random();
            if (randomKind >= 0 && randomKind <= 0.333) {
                cards = this.shuffleArray(cards);
            } else if (randomKind > 0.333 && randomKind <= 0.666) {
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
            const suitValues = this.shuffleArray(Array.from(Array(15).keys()).slice(2));
            for (const v of suitValues) {
                cards.push({card_id: [s, v].join(''), suit: s, value: v, player_id: null});
            }
        }
        cards = this.randomizeCards(cards);
        const cardDeck = [];
        while(cards.length) {
            for (const p of players) {
                const c = cards.pop();
                c.player_id = p;
                cardDeck.push(c);
            }
        }
        return cardDeck.sort((a,b) => a.suit.localeCompare(b.suit) || (b.value - a.value));
    }

    loopNextPlayer(player_id) {
        return this.loopPlayers(player_id);
    }

    biddingIsEnded(bids) {
        // Check if bidding phase is ended
        if (bids.length > 3) {
            const aBidExists = (bids.slice(-4)[0].id != 'pass');
            const nextThreePass = bids.slice(-3).reduce((acc, b) => acc + (b.id == 'pass' ? 1 : 0), 0) == 3;
            if (aBidExists && nextThreePass) return true;
        }
        return false;
    }

    extractBidMetadataById(bid) {
        // Infer bid tricks and trump from bid id
        if (bid == 'pass') return ['pass', 0, 'notrump'];
        try {
            const splitted = bid.split(' ');
            const [ bid_id, bid_value, trump ] = [ bid, parseInt(splitted[0]), splitted[1] ];
            return [ bid_id, bid_value, trump ];
        } catch {
            throw Error('Invalid human player bid id.');
        }
    }

    createBid(player_id, player_bid) {
        // Create a bid object
        const bid_rank = this.bidRanking();
        if (player_bid == 'pass') return {id: 'pass', value: 0, trump: 'notrump', rank: 0, player_id};
        else if (player_bid == 'double') return {id: 'double', value: 0, trump: 'notrump', rank: 0, player_id};
        else if (player_bid == 'redouble') return {id: 'redouble', value: 0, trump: 'notrump', rank: 0, player_id};
        // Get current bid metadata
        const [ bid_id, bid_value, trump ] = this.extractBidMetadataById(player_bid);
        const current_bid_rank = parseInt(bid_rank[bid_id]);
        return {
            id: bid_id,
            value: bid_value,
            trump: trump,
            rank: current_bid_rank,
            player_id: player_id
        };
    }

    bidIsValid(bid, bids) {
        // Check if bid is valid
        const bidCount = bids.length;
        const bidWithMaxRank = bidCount > 0 ? bids.slice(0).sort((a, b) => a.rank - b.rank).slice(-1)[0] : null;
        if (['double', 'redouble'].includes(bid.id) && (bidWithMaxRank == null)) return false;
        if (bidWithMaxRank == null) return true;
        // Check if was already declared a double or a redouble
        const maxBidIndex = bids.map((b, i) => b.id == bidWithMaxRank.id ? i : null).filter(i => i != null)[0];
        const doubleCount = bids.slice(maxBidIndex).reduce((acc, b) => b.id == 'double' ? acc + 1 : acc, 0);
        const redoubleCount = bids.slice(maxBidIndex).reduce((acc, b) => b.id == 'redouble' ? acc + 1 : acc, 0);
        if (bid.id == 'double') {
            if (bids.map(b => b.id == 'pass').every(v => v === true) || bidCount == 0 || doubleCount > 0 || redoubleCount > 0) return false;
        }
        if (bid.id == 'redouble' && (doubleCount == 0 || redoubleCount > 0)) return false;
        if (['double', 'redouble', 'pass'].includes(bid.id)) return true;
        // Check if was already declared a bid with a greater value
        return (bid.rank > bidWithMaxRank.rank) || (bid.rank == 0);
    }
};
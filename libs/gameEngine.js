'use strict';

import GameHelpers from '@/libs/gameHelpers';
import Game from '@/libs/classes/game';
import PlayEngine from '@/libs/playEngine';


class GameEngine {

    constructor() { }

    new(data) {
        const { cards, ...settings } = data;
        const s = new Game({ settings });
        // Initialize players
        const playersData = GameHelpers.players().map(id => {
            const pCards = data.cards.filter(c => c.player_id == id);
            return {id, cards: pCards};
        });
        s.addPlayers(playersData);
        // Initialize first player to play and game loop
        const [loop_players, player_id] = this.getNextPlayerToPlay(s);
        s.setCurrentPlayer(player_id);
        s.setCurrentLoop(loop_players);
        return s;
    }

    load(data) {
        return new Game(data);
    }

    undo(steps) { }

    play(s, {card, bid, auto}) {
        // Play next step
        // Get required state data
        // card = card && new Card(card);
        const { players, contract } = s;
        const currentPlayedCards = s.currentPlayedCards();
        const p = GameHelpers.getPlayer(players, s.current_player);
        // s.applySettings();
        if (s.contractWasDefined()) {
            // Deactivate dummy player if are not played no cards
            if (s.cards.length == 0) {
                players.forEach(pp => pp.deactivateDummy());
            }
            // Play the card
            if (card || auto) {
                const playedCard = this.playCard(p, players, currentPlayedCards, contract, card, auto);
                s.addCard(playedCard);
                if (s.tricksCount() == 0) {
                    // Activate dummy player
                    const pNext = this.getNextPlayer(p.id, players);
                    pNext.activateDummy();
                }
            }
            // Calculate tricks
            const tricks = this.createTricks(contract.trump, s.completedLoopsCards());
            s.updateTricks(tricks);
        } else {
            // Bidding phase
            this.biddingPhase(s, players, p, bid, auto);
        }
        // Calculate hand score if the hand is finished
        if (s.tricksCount() == 13) {
            const score = this.calculateScore(s.tricks, contract);
            s.updateScore(score);
            return s;
        }
        // Get next player in the hand loop and play the card
        const [loop_players, next_player_id] = this.getNextPlayerToPlay(s);
        s.setCurrentPlayer(next_player_id);
        s.setCurrentLoop(loop_players);
        return s;
    }

    nextStep(runs) { }

    getNextPlayer(player_id, players) {
        const nextPlayerId = GameHelpers.getNextPlayer(player_id);
        return GameHelpers.getPlayer(players, nextPlayerId);
    }

    getNextPlayerToPlay(s) {
        // Get next player that will play
        const cards_count = s.cards.length;
        const bid_count = s.bids.length;
        const loopCards = s.loopCards();
        const { tricks } = s;
        const tricksCount = s.tricksCount();
        let player_id, loop;
        if (!s.contract && bid_count == 0) {
            player_id = s.current_player ? String(s.current_player) : GameHelpers.randomItemFromArray(s.players).id;
            loop = GameHelpers.loopNextPlayer(player_id);
        } else if (!s.contract && bid_count > 0) {
            player_id = GameHelpers.getNextPlayer(s.bids.slice(-1)[0].player_id);
            loop = GameHelpers.loopNextPlayer(s.bids[0].player_id, s.players);
        } else if (s.contract && cards_count == 0) {
            player_id = GameHelpers.getNextPlayer(s.contract.player_id);
            loop = GameHelpers.loopNextPlayer(player_id);
        } else if (s.contract && cards_count > 0) {
            const loopCardsCount = loopCards.length;
            if (tricksCount > 0 && (loopCardsCount == 0 || loopCardsCount == 4)) {
                const lastTrick = tricks.slice(-1)[0];
                player_id = GameHelpers.getTrickWinner(lastTrick);
                loop = GameHelpers.loopNextPlayer(player_id);
            } else {
                player_id = GameHelpers.getNextPlayer(loopCards.slice(-1)[0].player_id);
                loop = GameHelpers.loopNextPlayer(loopCards[0].player_id);
            }
        }
        return [loop, player_id];
    }

    defineContract(bids) {
        // Define the contract
        const theBestBid = bids.slice(0).sort((a, b) => a.rank - b.rank).slice(-1)[0];
        const winningBidTeam = GameHelpers.getPlayerTeam(theBestBid.player_id);
        const winningBid = Object.assign({team_id: winningBidTeam}, theBestBid);
        const lastBidId = bids.filter(b => b.id != 'pass').slice(-1)[0].id;
        if (lastBidId == 'double') winningBid.double = true;
        if (lastBidId == 'redouble') {
            winningBid.double = false;
            winningBid.redouble = true;
        }
        return winningBid;
    }

    biddingPhase(s, players, player, player_bid, auto) {
        // Bidding phase: choose contract from bid of players
        // Check if bidding is ready to define a contract
        if (GameHelpers.biddingIsEnded(s.bids)) {
            const contract = this.defineContract(s.bids);
            s.addContract(contract);
            // Set dummy player
            this.setDummyPlayer(contract, players);
            return s;
        }
        // Auto play
        if (auto) player_bid = PlayEngine.autoBid(player, players, s.bids);
        if (!player_bid) return s;
        // Get next player in the hand loop and propose a bid
        const proposed = this.newBid(player, player_bid);
        if (!GameHelpers.bidIsValid(proposed, s.bids)) {
            const errmsg = `Player ${player.id} proposed a not valid bid: ${proposed.id}`;
            const err = Error(errmsg);
            err.response = {data: {message: errmsg}};
            throw err;
        }
        s.addBid(proposed);
        return s
    }

    playCard(player, players, loop_cards, contract, card, auto) {
        const cardRemainingCount = players.reduce((acc, p) => acc + p.cards.length, 0);
        if (cardRemainingCount == 0) return null;
        // Check if player holds that card
        if (card && !GameHelpers.playerHoldsCard(player.cards, card)) {
            throw Error(`Player ${player.id} does not hold that card ${card.card_id}`);
        }
        // Check if player plays a different suit still having cards in the loop suit
        const loopSuit = GameHelpers.getLoopSuit(loop_cards);
        const playerSuitCards = GameHelpers.filterCardsBySuit(loopSuit, player.cards);
        if (auto) {
            // card = PlayEngine.randomPlay(player, loop_cards);
            card = PlayEngine.logicReasoning(player, loop_cards, players, contract);
        }
        if (card.suit != loopSuit && playerSuitCards.length > 0) {
            throw Error(`Player can not play ${card.suit} cards having ${loopSuit} cards yet!`);
        }
        player.dropPlayedCard(card);
        return card;
    }

    newBid(p, player_bid) {
        // Make a new bid
        const { bid_id, player_id } = player_bid || {};
        if (!(player_bid && bid_id && p.id == player_id)) throw Error(`Bid player id ${player_id} and current player ${p.id} does not match`)
        return GameHelpers.createBid(p.id, bid_id);
    }

    setDummyPlayer(contract, players) {
        // Set who is the dummy player
        const contractP = GameHelpers.getPlayer(players, contract.player_id);
        const p = GameHelpers.getPlayer(players, contractP.partner.id);
        p.setDummy(true);
    }

    trick(trick_count, trump, playedHandCards) {
        // Decide the trick
        const suitTurn = playedHandCards[0].suit;
        // FIXME: Check if all players does not hold cards of the same hand suit if play another suit
        const cardsOfTrumpSuit = playedHandCards.filter(c => c.suit == trump);
        const cardsOfTurnSuit = playedHandCards.filter(c => c.suit == suitTurn);
        const winnerCard = (cardsOfTrumpSuit.length == 0 ? cardsOfTurnSuit : cardsOfTrumpSuit).sort((a, b) => a.value - b.value).slice(-1)[0];
        // Trick cards
        return playedHandCards.map(c => Object.assign({
            id: trick_count+1,
            winner: (c.suit == winnerCard.suit && c.value == winnerCard.value),
            team_id: GameHelpers.getPlayerTeam(c.player_id),
            team_trick_count: 0
        }, c));
    }

    createTricks(trump, completedLoops) {
        const self = this;
        if (completedLoops.length == 0) return [];
        const tricks = completedLoops.map((t, i) => self.trick(i, trump, t));
        const teamTrickCounter = GameHelpers.teams().reduce((acc, t) => { acc[t] = 0; return acc; }, {});
        for (const t of tricks) {
            for (const c of t) {
                if (c.winner) {
                    teamTrickCounter[c.team_id] += 1;
                    c.team_trick_count = parseInt(teamTrickCounter[c.team_id]);
                }
            }
        }
        return tricks;
    }

    calculateScore(tricks, contract) {
        // Calculate score
        const teamTrickCounter = GameHelpers.teamTricks(tricks);
        const winningCards = tricks.map(t => t.filter(c => c.winner)[0]);
        // Calculate hand score for every team
        return Object.keys(teamTrickCounter).map(team_id => {
            const isDefenceTeam = contract.team_id == team_id;
            const tricksWon = teamTrickCounter[team_id];
            const defenceTricks = winningCards.filter(c => c.team_id == contract.team_id);
            const defenceTricksCount = defenceTricks.length;
            const defenceTargetTricks = contract.value + 6;
            const defenceWon = defenceTricksCount >= defenceTargetTricks;
            const multiplicator = (contract.double && 2) || (contract.redouble && 4) || 1;
            let score = 0;
            if (isDefenceTeam && defenceWon) {
                score = defenceTricks
                    .filter(c => c.team_trick_count > 6)
                    .map(c => GameHelpers.evaluateTrickScore(contract.trump, c))
                    .reduce((acc, v) => acc + v, 0);
            } else if (!isDefenceTeam && !defenceWon) {
                score = Math.abs(defenceTargetTricks - defenceTricksCount) * 50;
            }
            const [bonusKind, bonus] = GameHelpers.calculateBonusScore(contract.value, contract.trump, 'green');
            return {
                team_id: team_id,
                contract: isDefenceTeam ? contract.id : null,
                winned_tricks: tricksWon,
                score: score * multiplicator,
                bonus: (isDefenceTeam && defenceWon) ? bonus : 0,
                bonus_kind: (isDefenceTeam && defenceWon) ? bonusKind : null
            };
        });
    }

}

export default new GameEngine();
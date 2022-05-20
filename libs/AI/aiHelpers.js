import orderBy from 'lodash/orderBy';
import GameHelpers from "@/libs/gameHelpers";


export default new class {

    constructor() { }

    getCardsWithSuit(suit, cards) {
        return cards.slice(0).filter(c => c.suit == suit);
    }

    teamPlayerWithLessCards(cards, partner_cards, suit) {
        return Math.min(
            cards.filter(c => c.suit == suit).length,
            partner_cards.filter(c => c.suit == suit).length
        );
    }

    honorSequenceCard(cards, suit) {
        const suitCards = suit ? this.getCardsWithSuit(suit, cards) : cards;
        const sequenceTypes = [[13, 12], [12, 11, 10]];
        for (const seq of sequenceTypes) {
            if (suitCards.filter(c => seq.includes(c.value)).length > 0) {
                return suitCards.slice(0).sort((a, b) => b.value - a.value)[0];
            }
        }
        return null;
    }

    greaterCard(cards, top_card) {
        const gtCards = cards.filter(c => c.value > top_card.value).slice(0);
        if (gtCards.length > 0) return gtCards.sort((a, b) => a.value - b.value)[0];
        return null;
    }

    winningSuitCard(cards, targetCards, kind, suit) {
        // Check if there is a greater card in that suit
        if (!(['greater', 'lowest'].includes(kind))) throw Error('kind parameter must be "greater" or "lower"');
        const sortOrder = kind == 'greater' ? (a, b) => b.value - a.value : (a, b) => a.value - b.value;
        const topCardValue = Math.max(-1, ...this.getCardsWithSuit(suit, targetCards).map(c => c.value));
        const gtCards = cards.filter(c => c.suit == suit && c.value > topCardValue);
        if (gtCards.length > 0) return gtCards.slice(0).sort(sortOrder)[0];
        return null;
    }

    winningCard(cards, targetCards, kind, suit, trump) {
        // Check if there is a greater card considering also trump play
        const otherPlayers = new Set(targetCards.map(c => c.player_id));
        const winnerCard = this.winningSuitCard(cards, targetCards, kind, suit);
        if (winnerCard && trump) {
            for (const p of otherPlayers) {
                const hasSuitCards = targetCards.filter(c => c.suit == suit && c.player_id == p).length > 0;
                const hasTrumpCards = targetCards.filter(c => c.suit == trump && c.player_id == p).length > 0;
                if (hasTrumpCards && !hasSuitCards) return null;
            }
        }
        return winnerCard;
    }

    getSuitCard(cards, kind, suit) {
        // Get the lowest or greater card
        if (!(['greater', 'lowest'].includes(kind))) throw Error('kind parameter must be "greater" or "lower"');
        const sortOrder = kind == 'greater' ? (a, b) => b.value - a.value : (a, b) => a.value - b.value;
        const suitCards = this.getCardsWithSuit(suit, cards).sort(sortOrder);
        return suitCards.length > 0 ? suitCards[0] : null;
    }

    countFutureWinners(team_ids, suit, suit_cards) {
        // Count future winners cards
        let cards = suit_cards.slice(0);
        const players = GameHelpers.loopPlayers('north');
        let winners = 0;
        while (cards.length > 0) {
            const maxCard = this.getSuitCard(cards, 'greater', suit);
            winners += team_ids.includes(maxCard.player_id) ? 1 : 0;
            cards = cards.filter(c => c.card_id != maxCard.card_id);
            for (const p of players) {
                if (p != maxCard.player_id) {
                    const minCard = this.getSuitCard(cards.filter(c => c.player_id == p), 'lowest', suit=suit);
                    if (minCard != null) {
                        cards = cards.filter(c => minCard && c.card_id != minCard.card_id);
                    }
                }
            }
        }
        return winners;
    }

    suitsOrderedBy(player, startingTeamCards, teamCards, opponentCards, trump, order_by) {
        const partnerId = GameHelpers.getPartnerId(player.id);
        const teamIds = [player.id, partnerId];
        const opponentIds = [GameHelpers.getNextPlayer(player.id), GameHelpers.getNextPlayer(partnerId)];
        const allCards = teamCards.concat(opponentCards);
        const suitInit = s => ({
            suit: s,
            starting_winners: 0, winners: 0, loosers: 0, player_loosers: 0, future_winners: 0, trump: 0,
            count: 0, player_count: 0, partner_count: 0, delta_count: 0,
            opponent1_count: 0, opponent2_count: 0, opponent_delta_count: 0, opponent_positive_count: 0,
            vice_honors: 0, honors: 0, honor_points: 0, honor_seq: 0, non_honors: 0, values: []
        });
        const suits = GameHelpers.suits().reduce((acc, s) => { acc[s] = suitInit(s); return acc; }, {});
        // Collect statistics
        for (const c of teamCards) {
            suits[c.suit].winners += this.winningCard([c], opponentCards, 'greater', c.suit) ? 1 : 0;
            suits[c.suit].loosers += this.winningCard([c], opponentCards, 'greater', c.suit) ? 0 : 1;
            if (c.player_id == player.id) {
                suits[c.suit].player_loosers += this.winningCard([c], opponentCards, 'greater', c.suit) ? 0 : 1;
            }
            suits[c.suit].trump = c.suit == trump ? 1 : 0;
            suits[c.suit].count += 1
            suits[c.suit].player_count += c.player_id == player.id ? 1 : 0;
            suits[c.suit].partner_count += c.player_id == partnerId ? 1 : 0;
            suits[c.suit].vice_honors += 11 > c.value > 8 ? 1 : 0;
            suits[c.suit].honors += c.value > 10 ? 1 : 0;
            suits[c.suit].non_honors += c.value < 10 ? 1 : 0;
            suits[c.suit].honor_points += c.value > 10 ? (c.value - 10) : 0;
            suits[c.suit].values.push(c.value);
            suits[c.suit].honor_seq = suits[c.suit].values.reduce((acc, n) => {
                acc += (n > 8 && suits[c.suit].values.includes(n-1)) ? 1 : 0;
                return acc;
            }, 0);
        }
        // Count possible winner cards
        for (const suit in suits) {
            const suitCards = allCards.filter(c => c.suit == suit);
            suits[suit].future_winners = this.countFutureWinners(teamIds, suit, suitCards);
        }
        // Get starting winners
        for (const c of startingTeamCards) {
            if (!suits[c.suit]) suits[c.suit] = suitInit(c.suit);
            suits[c.suit].starting_winners += this.winningCard([c], opponentCards, 'greater', c.suit) ? 1 : 0;
        }
        // Count the remaining cards of opponents
        for (const c of opponentCards) {
            if (!suits[c.suit]) suits[c.suit] = suitInit(c.suit);
            suits[c.suit].opponent1_count += c.player_id == opponentIds[0] ? 1 : 0
            suits[c.suit].opponent2_count += c.player_id == opponentIds[1] ? 1 : 0;
        }
        // Player delta count
        for (const [k, v] of Object.entries(suits)) {
            suits[k].delta_count = v.player_count - v.partner_count;
            suits[k].opponent_delta_count = Math.abs(v.opponent1_count - v.opponent2_count);
            suits[k].opponent_positive_count = v.opponent1_count > 0 && v.opponent2_count > 0;
        }
        const criterias = order_by.split(',');
        return orderBy(suits, criterias, criterias.map(() => 'desc'));
    }

    chooseCardToPlay(suit, player, startingTeamCards, teamCards, opponentCards, opponentMaxCard) {
        const self = this;
        return function({minCards, cards}, p) {
            let minCard = null;
            if (opponentMaxCard && p == opponentMaxCard.player_id) {
                minCard = opponentMaxCard;
            } else {
                minCard = self.getSuitCard(cards.filter(c => c.player_id == p), 'lowest', suit);
            }
            if (minCard == null) {
                const lowestSuits = self.suitsOrderedBy(player, startingTeamCards, teamCards, opponentCards, null, 'trump,non_honors,delta_count,loosers,count');
                for (const s of lowestSuits) {
                    if (s.player_count == 1 && s.winners == 1) continue;
                    if (GameHelpers.hasCardsOfSuit(s.suit, player.cards)) {
                        minCard = self.getSuitCard(player.cards, 'lowest', s.suit);
                    }
                }
                if (minCard == null) {
                    for (const s of lowestSuits) {
                        if (GameHelpers.hasCardsOfSuit(s.suit, player.cards)) {
                            minCard = self.getSuitCard(player.cards, 'lowest', s.suit);
                        }
                    }
                }
                cards = cards.filter(c => minCard && c.card_id != minCard.card_id);
            }
            if (minCard) minCards.push(minCard);
            return {minCards, cards};
        }
    }

    getSuitOrder(player, startingTeamCards, teamCards, opponentCards, trump) {
        // Detect what is the best order to play suit
        const partnerId = GameHelpers.getPartnerId(player.id);
        const teamIds = [player.id, partnerId];
        let cards = teamCards.concat(opponentCards);
        const suitRemaining = Array.from(new Set(cards.map(c => c.suit)));
        const players = GameHelpers.loopPlayers(player.id);
        const suitPermutations = GameHelpers.permutations(suitRemaining);
        let results = [];
        for (const suits of suitPermutations) {
            cards = teamCards.concat(opponentCards);
            let winners = 0;
            let futureWinners = 0;
            for (const suit of suits) {
                futureWinners = this.countFutureWinners(teamIds, suit, this.getCardsWithSuit(suit, cards));
                while (cards.filter(c => c.suit == suit).length > 0) {
                    const maxCard = this.getSuitCard(cards, 'greater', suit);
                    const maxCardPlayerPartner = GameHelpers.getPartnerId(maxCard.player_id);
                    const maxCardTeam = [maxCard.player_id, maxCardPlayerPartner];
                    winners += teamIds.includes(maxCard.player_id) ? 1 : 0;
                    cards = cards.filter(c => c.card_id != maxCard.card_id);
                    const opponentMaxCard = this.getSuitCard(cards.filter(c => !maxCardTeam.includes(c.player_id)), 'greater', suit);
                    const choosenCardsToPlay = players
                        .filter(p => p != maxCard.player_id)
                        .reduce(
                            this.chooseCardToPlay(suit, player, startingTeamCards, teamCards, opponentCards, opponentMaxCard), {minCards: [], cards}
                        );
                    cards = choosenCardsToPlay.cards;
                    const { minCards } = choosenCardsToPlay;
                    const cutted = minCards.filter(c => c.suit == trump).length > 0;
                    winners += teamIds.includes(maxCard.player_id) && !cutted ? 1 : 0;
                }
            }
            results.push({winners, future_winners: futureWinners, suits_order: suits});
        }
        results.sort((a, b) => (b.winners - a.winners) || (b.future_winners - a.future_winners));
        return results[0].suits_order;
    }

}

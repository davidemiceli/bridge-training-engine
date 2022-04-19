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

    winningSuitCard(cards, target_cards, kind, suit) {
        // Check if there is a greater card in that suit
        if (!(['greater', 'lowest'].includes(kind))) throw Error('kind parameter must be "greater" or "lower"');
        const sortOrder = kind == 'greater' ? (a, b) => b.value - a.value : (a, b) => a.value - b.value;
        const topCardValue = Math.max(-1, ...this.getCardsWithSuit(suit, target_cards).map(c => c.value));
        const gtCards = cards.filter(c => c.suit == suit && c.value > topCardValue);
        if (gtCards.length > 0) return gtCards.slice(0).sort(sortOrder)[0];
        return null;
    }

    winningCard(cards, target_cards, kind, suit, trump) {
        // Check if there is a greater card considering also trump play
        const otherPlayers = new Set(target_cards.map(c => c.player_id));
        const winnerCard = this.winningSuitCard(cards, target_cards, kind, suit=suit);
        if (winnerCard && trump) {
            for (const p of otherPlayers) {
                const hasSuitCards = target_cards.filter(c.suit == suit && c.player_id == p).length > 0;
                const hasTrumpCards = target_cards.filter(c.suit == trump && c.player_id == p).length > 0;
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
            const max_card = this.getSuitCard(cards, 'greater', suit);
            winners += team_ids.includes(max_card.player_id) ? 1 : 0;
            cards = cards.filter(c => c.card_id != max_card.card_id);
            for (const p of players) {
                if (p != max_card.player_id) {
                    const min_card = this.getSuitCard(cards.filter(c => c.player_id == p), 'lowest', suit=suit);
                    if (min_card != null) {
                        cards = cards.filter(c => min_card && c.card_id != min_card.card_id);
                    }
                }
            }
        }
        return winners;
    }

    getSuitOrder(player, starting_team_cards, team_cards, opponent_cards, trump) {
        // Detect what is the best order to play suit
        const teamIds = [player.id, player.partner.id];
        let cards = team_cards.concat(opponent_cards);
        const suitRemaining = new Set(cards.map(c => c.suit));
        const players = GameHelpers.loopPlayers(player.id);
        const suitPermutations = GameHelpers.permutations(suitRemaining);
        let results = [];
        for (const suits of suitPermutations) {
            cards = team_cards.concat(opponent_cards);
            let winners = 0;
            let future_winners = 0;
            for (const suit of suits) {
                future_winners = this.countFutureWinners(teamIds, suit, this.getCardsWithSuit(suit, cards));
                while (cards.filter(c => c.suit == suit).length > 0) {
                    const max_card = this.getSuitCard(cards, 'greater', suit);
                    const max_card_player_partner = String(GameHelpers.getPartnerId(max_card.player_id));
                    const max_card_team = [max_card.player_id, max_card_player_partner];
                    winners += teamIds.includes(max_card.player_id) ? 1 : 0;
                    cards = cards.filter(c => c.card_id != max_card.card_id);
                    const opponent_max_card = this.getSuitCard(cards.filter(c => !(max_card_team.includes(c.player_id))), 'greater', suit);
                    const min_cards = [];
                    for (const p of players) {
                        if (p != max_card.player_id) {
                            let min_card;
                            if (opponent_max_card && p == opponent_max_card.player_id) {
                                min_card = opponent_max_card;
                            } else {
                                min_card = this.getSuitCard(cards.filter(c => c.player_id == p), 'lowest', suit);
                            }
                            if (min_card == null) {
                                const lowestSuits = this.suitsOrderedBy(player, starting_team_cards, team_cards, opponent_cards, order_by='trump,non_honors,delta_count,loosers,count');
                                for (const s of lowestSuits) {
                                    if (s.player_count == 1 && s.winners == 1) continue;
                                    if (GameHelpers.hasCardsOfSuit(s.suit, player.cards)) {
                                        min_card = this.getSuitCard(player.cards, 'lowest', suit=s.suit);
                                    }
                                }
                                for (const s of lowestSuits) {
                                    if (GameHelpers.hasCardsOfSuit(s.suit, player.cards)) {
                                        min_card = this.getSuitCard(player.cards, 'lowest', suit=s.suit);
                                    }
                                }
                                cards = cards.filter(c => min_card && c.card_id != min_card.card_id);
                            }
                            min_cards.push(min_card);
                        }
                    }
                    cutted = min_cards.filter(c => c.suit == trump).length > 0;
                    winners += teamIds.includes(max_card.player_id) && !cutted ? 1 : 0;
                }
            }
            results.push({winners, future_winners, suits_order: suits});
        }
        results.sort((a, b) => (b.winners - a.winners) || (b.future_winners - a.future_winners))
        return results[0].suits_order;
    }

    suitsOrderedBy(player, starting_team_cards, team_cards, opponent_cards, order_by='winners', trump) {
        // TODO
    }

}

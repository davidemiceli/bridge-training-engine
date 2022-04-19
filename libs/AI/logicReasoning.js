import GameHelpers from '@/libs/gameHelpers';
import AiHelpers from '@/libs/AI/aiHelpers';


export default new class {
    // Player behavior to play cards using an omniscient logic reasoning

    constructor() { }

    sequencePlay(player, suit) {
        // Play team sequence cards if existing
        const partnerSeqCard = AiHelpers.honorSequenceCard(player.partner.cards, suit=suit)
        const playerSeqCard = AiHelpers.honorSequenceCard(player.cards, suit=suit)
        if (partnerSeqCard && playerSeqCard) {
            const choosenPlayer = AiHelpers.teamPlayerWithLessCards(player.cards, player.partner.cards, suit=suit)
            return choosenPlayer == 'player' ? playerSeqCard : null;
        } else if (partnerSeqCard && !playerSeqCard) { // pass
        } else if (!partnerSeqCard && playerSeqCard) {
            return playerSeqCard;
        }
        return null;
    }

    winningPlay(player, opponent_cards, suit, trump=null, sequence_play=False) {
        // Play team winning cards if exist
        const partnerWinningCard = AiHelpers.winningCard(player.partner.cards, opponent_cards, 'lowest', suit=suit, trump=trump)
        const playerWinningCard = AiHelpers.winningCard(player.cards, opponent_cards, 'lowest', suit=suit, trump=trump)
        if (partnerWinningCard && playerWinningCard) {
            const choosenPlayer = AiHelpers.teamPlayerWithLessCards(player.cards, player.partner.cards, suit=suit)
            return choosenPlayer == 'player' ? playerWinningCard : null;
        } else if (partnerWinningCard && !playerWinningCard) { // pass
        } else if (!partnerWinningCard && playerWinningCard) {
            return playerWinningCard;
        }
        // Check if there is a sequence
        return sequence_play ? LogicReasoning.sequencePlay(player, suit) : null;
    }

    play(player, loop_cards, players, contract) {
        // Play card
        const trump = contract.trump == 'notrump' ? null : contract.trump;
        const hasContract = [player.id, player.partner.id].includes(contract.player_id);
        const playTurn = loop_cards.length + 1;
        const teamCards = player.cards.concat(player.partner.cards);
        const startingTeamCards = player.card_deck.concat(player.partner.card_deck);
        const opponentCards = GameHelpers.getOpponentCards(player.id, players);
        const teamTrumpCards = AiHelpers.getCardsWithSuit(trump, teamCards);
        const opponentTrumpCards = AiHelpers.getCardsWithSuit(trump, opponentCards);
        const teamTrumpCardsCount = teamTrumpCards.length, opponentTrumpCardsCount = opponentTrumpCards.length;

        // If the player is the first to play the hand
        if (playTurn == 1) {
            let suitOrder = AiHelpers.getSuitOrder(player, startingTeamCards, teamCards, opponentCards);
            if (trump) {
                if (teamTrumpCardsCount > opponentTrumpCardsCount && opponentTrumpCardsCount > 0) {
                    suitOrder = [trump].concat(suitOrder);
                } else if (!hasContract && teamTrumpCardsCount > 0) {
                    const orderBy = 'opponent_positive_count,winners,future_winners,count,trump'
                    suitOrder = AiHelpers.suitsOrderedBy(player, startingTeamCards, teamCards, opponentCards, trump=trump, order_by=orderBy).map(s => s.suit);
                }
            }
            for (const suit of suitOrder) {
                const playerWinningCard = LogicReasoning.winningPlay(player, opponentCards, suit, trump=trump, sequence_play=!hasContract);
                if (playerWinningCard) return playerWinningCard;
                // if player has cards of that suit
                if (GameHelpers.hasCardsOfSuit(suit, player.cards)) {
                    return AiHelpers.getSuitCard(player.cards, 'lowest', suit=suit);
                }
            }
        }

        // Get the loop suit (when the player is the second to play)
        const loopSuit = GameHelpers.getLoopSuit(loop_cards);
        const playerSuitCards = AiHelpers.getCardsWithSuit(loopSuit, player.cards);

        // Player does not holds suit cards
        if (playerSuitCards.length == 0) {
            const lowestSuits = AiHelpers.suitsOrderedBy(player, startingTeamCards, teamCards, opponentCards, trump=trump, order_by='trump,non_honors,delta_count,loosers,count');
            for (const s of lowestSuits) {
                if (s.suit != trump && s.player_count == 1 && s.winners == 1) continue
                if (GameHelpers.hasCardsOfSuit(s.suit, player.cards)) {
                    return AiHelpers.getSuitCard(player.cards, 'lowest', suit=s.suit);
                }
            }
            for (const s of lowestSuits) {
                if (GameHelpers.hasCardsOfSuit(s.suit, player.cards)) {
                    return AiHelpers.getSuitCard(player.cards, 'lowest', suit=s.suit);
                }
            }
        }

        // Player holds suit cards
        if (playTurn == 2) {
            const opponentCard = loop_cards[0];
            const nextOpponentCards = GameHelpers.getNextOpponentCards(player.id, players);
            const playerWinningCard = LogicReasoning.winningPlay(player, [opponentCard].concat(nextOpponentCards), loopSuit, trump=trump, sequence_play=!hasContract);
            if (playerWinningCard && playerWinningCard.value > opponentCard.value) return playerWinningCard;
            return AiHelpers.getSuitCard(player.cards, 'lowest', suit=loopSuit);
        } else if (playTurn == 3) {
            const [partnerCard, opponentCard] = loop_cards;
            const nextOpponentCards = GameHelpers.getNextOpponentCards(player.id, players);
            if (partnerCard.value < opponentCard.value) {
                const winningCard = AiHelpers.winningCard(player.cards, nextOpponentCards, 'lowest', suit=loopSuit, trump=trump);
                if (winningCard && winningCard.value > opponentCard.value) return winningCard;
            }
            // If partner card is an honor, play the lowest card, else the high card
            return AiHelpers.getSuitCard(player.cards, (partnerCard.value > 10 || opponentCard.value > 10) ? 'lowest' : 'greater', suit=loopSuit)
        } else {
            const [opponentOneCard, partnerCard, opponentTwoCard] = loop_cards;
            const opponentTopCard = opponentOneCard.value > opponentTwoCard.value ? opponentOneCard : opponentTwoCard;
            const gtSuitCard = AiHelpers.greater_card(playerSuitCards, opponentTopCard);
            if (partnerCard.value < opponentTopCard.value && gtSuitCard) return gtSuitCard;
            else return AiHelpers.getSuitCard(player.cards, 'lowest', suit=loopSuit);
        }
    }
}
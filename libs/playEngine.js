import GameHelpers from '@/libs/gameHelpers';
import LogicReasoning from '@/libs/AI/logicReasoning';


export default new class {

    constructor() { }

    randomPlay(player, loop_cards) {
        const suit = GameHelpers.getLoopSuit(loop_cards);
        const playerSuitCards = GameHelpers.filterCardsBySuit(suit, player.cards);
        if (playerSuitCards.length > 0) {
            const suitCards = GameHelpers.filterCardsBySuit(suit, playerSuitCards);
            return GameHelpers.randomItemFromArray(suitCards);
        }
        return GameHelpers.randomItemFromArray(player.cards);
    }

    logicReasoning(player, loop_cards, players, contract) {
        return LogicReasoning.play(player, loop_cards, players, contract);
    }

};

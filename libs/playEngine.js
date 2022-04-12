'use strict';

import GameHelpers from '@/libs/gameHelpers';


class PlayEngine {

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

}

export default new PlayEngine();
'use strict';

import { flatten } from 'lodash';
import GameHelpers from "@/libs/gameHelpers";


export default new class {

    constructor() { }

    inferBid(cards) {
        const suits = GameHelpers.suits();
        const suitCount = suits.map(suit => {
            const suitCards = GameHelpers.filterCardsBySuit(suit, cards);
            const points = GameHelpers.countCardsPoints(suitCards);
            const count = suitCards.length;
            return {suit, points, count};
        })
        // Check for trump
        const topSuit = suitCount.sort((a,b) => (b.count - a.count) || (b.points - a.points))[0];
        const trumpThreshold = 7;
        const trump = (topSuit.count > trumpThreshold && topSuit.points > 8) ? topSuit.suit : 'notrump';
        const teamPoints = suitCount.reduce((a,s) => a + s.points, 0);
        return [teamPoints, trump];
    }

    bestContract(players) {
        const cards = flatten(players.map(c => c.cards));
        const [teamId, _] = GameHelpers.getTopTeamByPoints(cards);
        const teamCards = GameHelpers.getTeamCards(teamId, cards);
        const playerId = GameHelpers.getTopTeamPlayer(teamCards);
        const [points, trump] = this.inferBid(teamCards);
        return [playerId, teamId, points, trump];
    }
}
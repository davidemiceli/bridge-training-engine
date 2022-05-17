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
        const bidValue = GameHelpers.tricksByTeamPoints(teamPoints);
        return [bidValue, trump];
    }

    inferSlams(cards, value, trump) {
        const suitCards = GameHelpers.filterCardsBySuit(trump, cards);
        const KCount = cards.filter(c => c.value == 13).length;
        const ACount = cards.filter(c => c.value == 14).length;
        const KeyCards = ACount + KCount;
        const TrumpKeyCards = suitCards.filter(c => [14, 13, 12].includes(c.value)).length;
        let v = value;
        if (trump == 'notrump') {
            if (value > 4) {
                if (KeyCards == 8) v = 7;
                else if (KeyCards == 7) v = 6;
            }
        } else {
            if (value == 4) {
                if (TrumpKeyCards == 4 && ACount == 4 && KCount == 4) v = 6;
            } else if (value > 4) {
                if (TrumpKeyCards == 3 && ACount == 4) v = 7;
                else if (TrumpKeyCards == 2 && ACount == 4) v = 6;
                else if (TrumpKeyCards == 3 && ACount == 3) v = 6; 
            }
        }
        return [v, trump];
    }

    bestContract(players) {
        const cards = flatten(players.map(c => c.cards));
        const [teamId, _] = GameHelpers.getTopTeamByPoints(cards);
        const teamCards = GameHelpers.getTeamCards(teamId, cards);
        const playerId = GameHelpers.getTopTeamPlayer(teamCards);
        const [baseValue, baseTrump] = this.inferBid(teamCards);
        const [value, trump] = this.inferSlams(cards, baseValue, baseTrump);
        const bidId = GameHelpers.createBidId(value, trump);
        return [playerId, teamId, bidId];
    }
}
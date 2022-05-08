'use strict';

import { sum, sampleSize, random } from 'lodash';
import GameHelpers from '@/libs/gameHelpers';


export default new class {

    constructor() { }

    removePlayerFromCards(hand, cards) {
        cards.forEach(c => {
            const i = hand.findIndex((hc => hc.card_id == c.card_id));
            hand[i].player_id = null;
        });
        return hand;
    }

    addCards(player_id, cards, hand) {
        cards.forEach(c => {
            const i = hand.findIndex((hc => hc.card_id == c.card_id));
            hand[i].player_id = player_id;
        });
        return hand;
    }

    addRandomSuitCards(player_id, suit, hand, count, excluded) {
        const excludedCards = excluded.map(c => c.card_id);
        const baseCards = hand.filter(c => c.suit == suit && c.player_id == null && !excludedCards.includes(c.card_id));
        const cards = sampleSize(baseCards, count);
        return this.addCards(player_id, cards, hand);
    }

    assignCards(player_id, hand, cards) {
        cards.forEach(c => {
            const i = hand.findIndex((hc => hc.card_id == c.card_id));
            hand[i].player_id = player_id;
        });
        return hand;
    }

    hcpCombinations(arr, zeros) {
        /* Example:
        const hcpCmb = this.hcpCombinations([1,2,3,4,5,6,7,8,9,10], true);
        const hcpCmbSuits = this.hcpCombinations([1,2,3,4], false); */
        const maxLen = 4;
        return GameHelpers.combinations(arr, maxLen)
            .map(v => v.map(Number))
            .reduce((a, v) => {
                const missingZero = zeros ? Array(maxLen - v.length).fill(0) : [];
                const pts = sum(v);
                if (!a[pts]) a[pts] = [];
                a[pts].push(v.concat(missingZero));
                return a;
            }, {});
    }

    distributeRemainingCards(norms, hand) {
        const players = GameHelpers.shuffleArray(GameHelpers.players()).slice(random(1,4,1));
        const unsettedCards = GameHelpers.shuffleArray(hand).filter(c => c.player_id == null);
        for (const card of unsettedCards) {
            const { suit } = card;
            for (const p of players) {
                const { max, exclude } = norms[p][suit];
                const playerCardsCount = hand.filter(c => c.player_id == p).length;
                if (playerCardsCount == 13) break;
                const playerCardsSuitCount = hand.filter(c => c.suit == suit && c.player_id == p).length;
                if (playerCardsSuitCount == max || exclude.includes(card.value)) continue;
                hand = this.addCards(p, [card], hand);
            }
        }
        return hand;
    }

    executeNorms(norms) {
        let hand = GameHelpers.randomCardDeck().map(c => { c.player_id = null; return c; });
        const suits = GameHelpers.suits();
        const players = GameHelpers.players();
        // Add included cards to players
        for (const p of players) {
            for (const s of suits) {
                const { include } = norms[p][s];
                const included = hand.filter(c => c.suit == s && include.includes(c.value));
                hand = this.assignCards(p, hand, included);
            }
        }
        // Add minimum cards to players
        for (const p of GameHelpers.shuffleArray(players)) {
            for (const s of GameHelpers.shuffleArray(suits)) {
                const { min, exclude } = norms[p][s];
                if (min == 0) continue;
                const playerCards = hand.filter(c => c.suit == s && c.player_id == p);
                const remainingForMin = min - playerCards.length;
                if (remainingForMin <= 0) continue;
                const excluded = hand.filter(c => c.suit == s && exclude.includes(c.value));
                hand = this.addRandomSuitCards(p, s, hand, remainingForMin, excluded);
            }
        }
        // Add remaining cards to players
        for (let j=0; j<52; j++) {
            hand = this.distributeRemainingCards(norms, hand);
            const unassignedCards = hand.filter(c => c.player_id == null).length;
            if (unassignedCards == 0) return hand;
        }
        return null;
    }

    async applyNorms(norms) {
        // Add remaining cards to players
        const iterations = 1000;
        for (let i=0; i<iterations; i++) {
            const hand = this.executeNorms(norms);
            if (hand != null) return hand;
            await GameHelpers.timeout(0);
        }
        throw Error('the rule does not produced consistent hands in a finite time, try again if you think the rule can produce valid results.');
    }
}
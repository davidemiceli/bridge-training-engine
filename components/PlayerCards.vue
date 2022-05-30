<template>
    <table class="table-auto w-full border-collapse bg-white text-center text-xs md:text-base">
        <thead>
            <tr>
                <th class="border py-2 px-4">Players</th>
                <th class="border py-2 px-4 font-textcards" v-bind:class="[suitColor(suit)]" v-for="suit in suitValues" :key=suit>{{suitSymbol(suit)}}</th>
                <th class="border py-2 px-4 capitalize" v-if="showPoints">HCP</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="p in playersData" :key=p.id v-show="p.cards.length > 0" class="odd:bg-white even:bg-slate-100">
                <td class="border py-2 px-4 capitalize font-bold">{{p.id}}</td>
                <td v-for="suit in suitValues" :key=suit class="border py-2 px-4 font-cards leading-cards text-base md:text-4xl text-center">
                    <span v-bind:class="[suitColor(suit)]" v-for="c in getCards(suit, p.cards)" :key=c.card_id>{{cardUnicode(c.card_id)}}</span>
                </td>
                <td v-if="showPoints" class="border py-2 px-4 italic uppercase">{{calculatePlayerPoints(p)}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import GameHelpers from '@/libs/gameHelpers';


export default {
    props: {
        players: Array,
        onlyRemainingCards: Boolean,
        showPoints: Boolean
    },
    data: function() {
        return {
            suitValues: GameHelpers.suits()
        }
    },
    methods: {
        getCards(suit, cards) {
            return GameHelpers.filterCardsBySuit(suit, cards);
        },
        suitColor(suit) {
            return GameHelpers.suitColor(suit);
        },
        suitSymbol(suit) {
            return GameHelpers.suitIcon(suit);
        },
        valueIcon(card_value) {
            return GameHelpers.cardValueIcon(card_value);
        },
        cardUnicode(card_id) {
            return GameHelpers.cardUnicode(card_id);
        },
        calculatePlayerPoints(p) {
            const { onlyRemainingCards } = this;
            const cards = onlyRemainingCards ? p.cards : p.card_deck;
            return GameHelpers.calculatePlayerPoints(p.id, cards);
        }
    },
    computed: {
        playersData() {
            const { players, showPoints, onlyRemainingCards } = this;
            return players.map(p => {
                return {
                    ...p,
                    show: true,
                    showdata: showPoints,
                    cards: onlyRemainingCards ? p.cards : p.card_deck
                }
            });
        }
    }
}
</script>

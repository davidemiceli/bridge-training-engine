<template>
    <table class="table is-striped has-text-centered">
        <thead>
            <tr>
                <th>Players</th>
                <th class="card-suit" v-bind:class="[suitColor(suit)]" v-for="suit in suitValues" :key=suit>{{suitSymbol(suit)}}</th>
                <th class="is-capitalized" v-if="showPoints">HCP</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="p in playersData" :key=p.id v-show="p.cards.length > 0">
                <td class="is-size-6 has-text-weight-bold is-capitalized is-vcentered p-0">{{p.id}}</td>
                <td v-for="suit in suitValues" :key=suit class="p-1 is-vcentered">
                    <span class="is-size-3" v-bind:class="[suitColor(suit)]" v-for="c in getCards(suit, p.cards)" :key=c.card_id>{{cardUnicode(c.card_id)}}</span>
                </td>
                <td v-if="showPoints" class="p-0 is-size-6 is-italic is-uppercase is-vcentered">{{calculatePlayerPoints(p)}}</td>
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
        getCards: function(suit, cards) {
            return GameHelpers.filterCardsBySuit(suit, cards);
        },
        suitColor: function(suit) {
            const suit_color = GameHelpers.suitColor(suit);
            return `card-${suit_color}`;
        },
        suitSymbol: function(suit) {
            return GameHelpers.suitIcon(suit);
        },
        valueIcon: function(card_value) {
            return GameHelpers.cardValueIcon(card_value);
        },
        cardUnicode(card_id) {
            return GameHelpers.cardUnicode(card_id);
        },
        calculatePlayerPoints: function(p) {
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

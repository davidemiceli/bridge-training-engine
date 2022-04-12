<template>
    <div class="block content is-unselectable">
        <p class="card-suit is-size-6 has-text-weight-bold has-text-centered">
            <span v-for="v in bidValues" :key=v>
                <span class="card-text is-uppercase is-clickable mr-5" @click="onSelectBid(v, null)"
                v-bind:class="[v == value ? 'card-black' : 'has-text-grey']">{{v}}</span>
            </span>
            <span v-bind:class="[suit == trump ? suitColor(suit) : 'has-text-grey', 'mr-5']" v-for="suit in bidTrumps" :key=suit>
                <span class="card-text is-uppercase is-clickable" @click="onSelectBid(null, suit)">{{suitSymbol(suit)}}</span>
            </span>
            <span class="mr-4 has-text-success-dark is-clickable" @click="onSelectBid('pass', null)">PASS</span>
            <span class="mr-4 has-text-danger-dark is-clickable" @click="onSelectBid('double', null)">X</span>
            <span class="mr-4 has-text-info-dark is-clickable" @click="onSelectBid('redouble', null)">XX</span>
        </p>
    </div>
</template>

<script>
import GameHelpers from '@/libs/gameHelpers';


export default {
    props: {
        playerId: String
    },
    data: function() {
        return {
            trump: null,
            value: null
        }
    },
    methods: {
        suitColor(suit) {
            const suit_color = GameHelpers.suitColor(suit);
            return `card-${suit_color}`;
        },
        suitSymbol(suit) {
            return GameHelpers.suitIcon(suit);
        },
        valueIcon(card_value) {
            return GameHelpers.cardValueIcon(card_value);
        },
        onSelectBid(value, trump) {
            const { playerId } = this;
            if (value) this.value = value;
            if (trump) this.trump = trump;
            const bid = {bid_id: null, player_id: playerId};
            if (['pass', 'double', 'redouble'].indexOf(value) > -1) {
                this.value = null;
                this.trump = null;
                bid.bid_id = value;
            }
            if (this.value && this.trump) {
                bid.bid_id = `${this.value} ${this.trump}`;
            }
            if (bid.bid_id) {
                this.$emit('onSelectBid', bid);
                this.value = null;
                this.trump = null;
            }
        }
    },
    computed: {
        bidTrumps: GameHelpers.bidTrumps,
        bidValues: GameHelpers.bidValues
    }
}
</script>

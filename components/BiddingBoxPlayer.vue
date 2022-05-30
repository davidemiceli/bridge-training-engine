<template>
    <div class="flex space-x-3 sm:space-x-6 justify-center cursor-default font-textcards font-bold text-center">
        <div v-for="v in bidValues" :key=v class="inline-flex uppercase cursor-pointer" v-bind:class="[v == value ? 'text-gray-800' : 'text-gray-500']" @click="onSelectBid(v, null)">
            {{v}}
        </div>
        <div class="inline-flex" v-bind:class="[suit == trump ? suitColor(suit) : 'text-gray-500', 'mr-5']" v-for="suit in bidTrumps" :key=suit>
            <span class="uppercase cursor-pointer" @click="onSelectBid(null, suit)">{{suitSymbol(suit)}}</span>
        </div>
        <div class="inline-flex text-green-600 cursor-pointer" @click="onSelectBid('pass', null)">PASS</div>
        <div class="inline-flex text-red-600 cursor-pointer" @click="onSelectBid('double', null)">X</div>
        <div class="inline-flex text-sky-600 cursor-pointer" @click="onSelectBid('redouble', null)">XX</div>
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
            return GameHelpers.suitColor(suit);
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

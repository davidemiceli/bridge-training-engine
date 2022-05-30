<template>
    <div class="grid grid-cols-4 gap-3 text-center items-center place-content-center cursor-pointer text-sm sm:gap-4 sm:text-5xl" @click="onClickPanel">
        <div class="col-span-1 text-gray-700" v-for="player_id in loopPlayers" :key="player_id">
            <div class="block md:hidden text-xs font-bold uppercase mb-2">{{player_id.charAt(0)}}</div>
            <div class="hidden md:block text-lg font-bold uppercase mb-2">{{player_id}}</div>
        </div>
        <div class="col-span-1 font-bold text-xs md:text-lg" v-for="(b, i) in bidList" :key=i>
            <span class="font-textcards uppercase" v-bind:class="[suitColor(b.name.suit)]" v-if="isNormalBid(b.id)">{{b.name.value}} {{suitSymbol(b.name.suit)}}</span>
            <strong class="text-green-600" v-if="b.id == 'pass'">PASS</strong>
            <strong class="text-red-600" v-if="b.id == 'double'">X</strong>
            <strong class="text-sky-600" v-if="b.id == 'redouble'">XX</strong>
        </div>
    </div>
</template>

<script>
import GameHelpers from '@/libs/gameHelpers';


export default {
    props: {
        loopPlayers: Array,
        bids: Array
    },
    methods: {
        isNormalBid(value) {
            return ['pass', 'double', 'redouble'].indexOf(value) === -1;
        },
        onClickPanel() {
            this.$emit('onClickPanel');
        },
        suitColor(suit) {
            return GameHelpers.suitColor(suit);
        },
        suitSymbol(suit) {
            return GameHelpers.suitIcon(suit);
        },
        valueIcon(card_value) {
            return GameHelpers.cardValueIcon(card_value);
        }
    },
    computed: {
        bidTrumps: GameHelpers.bidTrumps,
        bidValues: GameHelpers.bidValues,
        bidList() {
            return this.bids.map(b => Object.assign({name: {suit: b.trump, value: b.id.split(' ')[0], card_id: b.id}}, b));
        }
    }
}
</script>

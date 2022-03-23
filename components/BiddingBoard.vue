<template>
    <div class="tile is-ancestor is-flex-wrap-wrap is-mobile is-clickable" @click="onClickPanel">
        <div class="tile is-3 is-parent" v-for="player_id in loopPlayers" :key="player_id">
            <div class="tile is-child is-flex is-justify-content-center is-align-items-center">
                <h4 class="is-size-6 is-uppercase has-text-weight-bold">{{player_id}}</h4>
            </div>
        </div>
        <div class="tile is-3 is-parent" v-for="b in bidList" :key=b.id>
            <div class="tile is-child is-flex is-justify-content-center card-suit is-size-6 has-text-weight-bold">
                <span class="card-text is-uppercase" v-bind:class="[suitColor(b.name.suit)]" v-if="isNormalBid(b.id)">{{b.name.value}} {{suitSymbol(b.name.suit)}}</span>
                <span class="has-text-success-dark" v-if="b.id == 'pass'">PASS</span>
                <span class="has-text-danger-dark" v-if="b.id == 'double'">X</span>
                <span class="has-text-info-dark" v-if="b.id == 'redouble'">XX</span>
            </div>
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
            const suit_color = GameHelpers.suitColor(suit);
            return `card-${suit_color}`;
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

<template>

    <div class="container mx-auto text-gray-800 text-center">
        <h1 class="text-4xl font-bold mb-6">Bids</h1>
        <!-- Bids table -->
        <table class="table-auto w-full border-collapse bg-white text-center">
            <thead>
                <tr>
                    <th class="border py-2 px-4">#</th>
                    <th class="border py-2 px-4">Bid</th>
                    <th class="border py-2 px-4">Trump</th>
                    <th class="border py-2 px-4">Player</th>
                    <th class="border py-2 px-4">Double</th>
                    <th class="border py-2 px-4">Redouble</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(b, index) in bidList" :key=index class="odd:bg-white even:bg-slate-100">
                    <td class="border py-2 px-4">{{index + 1}}</td>
                    <td class="border py-2 px-4">
                        <SingleCard :card=b.name :cardSize='6' class="text-center" v-if="isNormalBid(b.id)" />
                        <strong class="text-green-600" v-if="b.id == 'pass'">PASS</strong>
                        <strong class="text-red-600" v-if="b.id == 'double'">X</strong>
                        <strong class="text-sky-600" v-if="b.id == 'redouble'">XX</strong>
                    </td>
                    <td class="border py-2 px-4">
                        <strong class="font-textcards uppercase" v-bind:class="[suitColor(b.trump)]" v-if="isNormalBid(b.id)">{{suitSymbol(b.trump)}}</strong>
                        <span class="material-icons text-gray-300" v-if="b.id == 'pass'">remove</span>
                    </td>
                    <td class="border py-2 px-4 font-bold capitalize" v-bind:class="[b.player_id]">{{b.player_id}}</td>
                    <td class="border py-2 px-4">
                        <span class="material-icons" v-if="b.double">done</span>
                        <span class="material-icons text-gray-300" v-if="!b.double">remove</span>
                    </td>
                    <td class="border py-2 px-4">
                        <span class="material-icons" v-if="b.redouble">done_all</span>
                        <span class="material-icons text-gray-300" v-if="!b.redouble">remove</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
import { mapGetters } from 'vuex';
import GameHelpers from '@/libs/gameHelpers';


export default {
    layout: 'play',
    middleware: ['tableNotCreated', 'gameNotCreated'],
    methods: {
        isNormalBid(value) {
            return ['pass', 'double', 'redouble'].indexOf(value) === -1;
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
        ...mapGetters({
            bids: 'game/bids'
        }),
        bidList() {
            return this.bids.map(b => Object.assign({name: {suit: b.trump, value: b.id.split(' ')[0], card_id: b.id}}, b));
        }
    }
}
</script>

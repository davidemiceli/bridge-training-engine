<template>

    <div>
        <p class="title has-text-weight-bold has-text-centered">Bids</p>
        <!-- Bids table -->
        <div class="table-container">
            <table class="table is-bordered is-striped is-fullwidth has-text-centered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Bid</th>
                        <th>Trump</th>
                        <th>Player</th>
                        <th>Double</th>
                        <th>Redouble</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(b, index) in bidList" :key=index>
                        <td>{{index + 1}}</td>
                        <td>
                            <SingleCard :card=b.name :cardSize='6' class="has-text-centered" v-if="isNormalBid(b.id)" />
                            <strong v-if="b.id == 'pass'">PASS</strong>
                            <strong class="has-text-danger-dark" v-if="b.id == 'double'">X</strong>
                            <strong class="has-text-info-dark" v-if="b.id == 'redouble'">XX</strong>
                        </td>
                        <td>
                            <strong class="card-suit is-size-6 is-uppercase" v-bind:class="[suitColor(b.trump)]" v-if="isNormalBid(b.id)">{{suitSymbol(b.trump)}}</strong>
                            <span class="material-icons has-text-grey-lighter" v-if="b.id == 'pass'">remove</span>
                        </td>
                        <td class="has-text-weight-bold is-capitalized" v-bind:class="[b.player_id]">{{b.player_id}}</td>
                        <td>
                            <span class="material-icons" v-if="b.double">done</span>
                            <span class="material-icons has-text-grey-lighter" v-if="!b.double">remove</span>
                        </td>
                        <td>
                            <span class="material-icons" v-if="b.redouble">done_all</span>
                            <span class="material-icons has-text-grey-lighter" v-if="!b.redouble">remove</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>

<script>
import { mapGetters } from 'vuex';
import GameHelpers from '@/libs/gameHelpers';
import gameNotCreatedMiddleware from '@/libs/customMiddlewares/gameNotCreated';


export default {
    layout: 'play',
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
    },
    async mounted() {
        return await gameNotCreatedMiddleware(this);
    }
}
</script>

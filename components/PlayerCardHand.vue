<template>
    <div class="block">
        <div class="is-size-6 has-text-weight-bold is-uppercase icon-text" v-bind:class="[player.dummy ? 'has-text-warning-dark' : 'has-text-black']">
            <span>{{player.id}}</span>
            <span class="ml-1" v-if="player.dummy">(dummy)</span>
            <span class="icon material-icons has-text-success-dark is-size-7" v-if="interactive && player.isturn">circle</span>
        </div>
        <div class="is-size-6 has-text-weight-bold mb-1" v-if="player.showdata">{{points}} HCP ({{cardDistribution}} distribution)</div>
        <div v-if="shapeKind == 'chars'">
            <div v-for="suit in suitValues" :key=suit class="is-size-4 has-text-weight-bold icon-text is-unselectable" v-bind:class="[suitColor(suit)]">
                <span class="card-suit">{{suitIcon(suit)}}</span>
                <span class="icon material-icons has-text-weight-bold has-text-grey-light" v-if="!player.show">horizontal_rule</span>
                <span v-if="player.show">
                    <span v-for="c in getCards(suit, player.cards)" :key=c.card_id class="ml-1" v-bind:class="[clickableCard]" @click="onClickCard(c)">{{cardValueIcon(c.value)}}</span>
                </span>
            </div>
        </div>
        <div v-if="shapeKind == 'cards'" class="card-shape is-size-1 is-unselectable">
            <div v-if="inlineAlternate && ((player.id == 'east') || (player.id == 'west'))">
                <div v-if="!player.show" class="has-text-grey">
                    <div v-for="(s, index) in hiddenPlayerCards" :key=index>
                        <span v-for="(c, index_c) in s" :key=index_c>{{cardUnicode('hidden')}}</span>
                    </div>
                </div>
                <div v-if="player.show">
                    <div v-for="suit in suitValues" :key=suit>
                        <span v-for="c in getCards(suit, player.cards)" :key=c.card_id @click="onClickCard(c)" v-bind:class="[suitColor(c.suit), clickableCard]">{{cardUnicode(c.card_id)}}</span>
                    </div>
                </div>
            </div>
            <div v-if="!inlineAlternate || ((player.id == 'north') || (player.id == 'south'))">
                <div v-if="!player.show" class="has-text-grey"><span v-for="c in sortedPlayerCards" :key=c.card_id>{{cardUnicode('hidden')}}</span></div>
                <div v-if="player.show">
                    <span v-for="c in sortedPlayerCards" :key=c.card_id @click="onClickCard(c)" v-bind:class="[suitColor(c.suit), clickableCard]">{{cardUnicode(c.card_id)}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import GameHelpers from '@/libs/gameHelpers';


export default {
    props: {
        player: Object,
        shapeKind: {
            type: String,
            default: 'cards'
        },
        interactive: {
            type: Boolean,
            default: true
        },
        inlineAlternate: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        getAllCards(cards) {
            cards.sort((a, b) => b.rank - a.rank);
            return cards;
        },
        getCards(suit, cards) {
            if (cards === undefined) return [];
            const suitFiltered = cards.filter(c => c.suit == suit);
            suitFiltered.sort((a, b) => b.value - a.value);
            return suitFiltered;
        },
        suitColor(suit) {
            const suit_color = GameHelpers.suitColor(suit);
            return `card-${suit_color}`;
        },
        cardValueIcon(v) {
            return GameHelpers.cardValueIcon(v);
        },
        suitIcon(suit) {
            return GameHelpers.suitIcon(suit);
        },
        cardUnicode(card_id) {
            return GameHelpers.cardUnicode(card_id);
        },
        onClickCard(card) {
            this.$emit('onClickCard', card);
        }
    },
    computed: {
        suitValues() {
            return GameHelpers.sortedSuits('notrump');
        },
        points() {
            const { id, card_deck } = this.player;
            return GameHelpers.calculatePlayerPoints(id, card_deck);
        },
        sortedPlayerCards() {
            const { cards } = this.player;
            const suits = GameHelpers.sortedSuits('notrump');
            const sorted_cards = [];
            for (const s of suits) {
                const cds = this.getCards(s, cards);
                cds.sort((a, b) => b.value - a.value);
                for (const c of cds) sorted_cards.push(c);
            }
            return sorted_cards;
        },
        hiddenPlayerCards() {
            const hidden_cards = Array(this.player.cards.length);
            return GameHelpers.chunk(hidden_cards, 4);
        },
        cardDistribution() {
            const { player, getCards } = this;
            const { card_deck } = player;
            const distributions = this.suitValues.map(s => getCards(s, card_deck).length);
            distributions.sort().reverse();
            return distributions.join("");
        },
        clickableCard() {
            return this.interactive ? 'is-clickable' : '';
        }
    }
}
</script>

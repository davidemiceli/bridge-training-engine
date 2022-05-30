<template>
    <div>
        <div class="text-sm md:text-base font-bold uppercase" v-bind:class="[player.dummy ? 'text-amber-600' : '']">
            <span>{{player.id}}</span>
            <span class="ml-1" v-if="player.dummy">(dummy)</span>
            <span class="text-xs material-icons text-green-800" v-if="interactive && player.isturn">circle</span>
        </div>
        <div class="text-xs md:text-base font-bold text-gray-700" v-if="player.showdata">{{points}} HCP ({{cardDistribution}} distribution)</div>
        <div v-if="shapeKind == 'chars'" class="mt-2">
            <div v-for="suit in suitValues" :key=suit class="font-bold is-unselectable" v-bind:class="[suitColor(suit)]">
                <span class="font-textcards">{{suitIcon(suit)}}</span>
                <span class="material-icons font-bold has-text-grey-light" v-if="!player.show">horizontal_rule</span>
                <span v-if="player.show">
                    <span v-for="c in getCards(suit, player.cards)" :key=c.card_id class="ml-1" v-bind:class="[clickableCard]" @click="onClickCard(c)">{{cardValueIcon(c.value)}}</span>
                </span>
            </div>
        </div>
        <div v-if="shapeKind == 'cards'" class="mt-1 font-cards leading-cards text-3xl md:text-5xl">
            <div v-if="inlineAlternate && ((player.id == 'east') || (player.id == 'west'))">
                <div v-if="!player.show" class="text-gray-500">
                    <div v-for="(s, index) in hiddenPlayerCards" :key=index>
                        <div v-for="(c, index_c) in s" :key=index_c class="inline-flex">{{cardUnicode('hidden')}}</div>
                    </div>
                </div>
                <div v-if="player.show">
                    <div v-for="suit in suitValues" :key=suit>
                        <span v-for="c in getCards(suit, player.cards)" :key=c.card_id @click="onClickCard(c)" v-bind:class="[suitColor(c.suit), clickableCard]">{{cardUnicode(c.card_id)}}</span>
                    </div>
                </div>
            </div>
            <div v-if="!inlineAlternate || ((player.id == 'north') || (player.id == 'south'))">
                <div v-if="!player.show" class="text-gray-500"><span v-for="c in sortedPlayerCards" :key=c.card_id>{{cardUnicode('hidden')}}</span></div>
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
            return GameHelpers.suitColor(suit);
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
            return this.interactive ? 'cursor-pointer' : '';
        }
    }
}
</script>

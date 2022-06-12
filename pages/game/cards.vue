<template>
    <div class="container mx-auto text-gray-800 text-center">
        <h1 class="text-4xl font-bold mb-6">Cards</h1>

        <h1 class="text-xl font-bold mb-6">Starting card deck</h1>
        <PlayerCards :players=players :onlyRemainingCards='false' :showPoints='true' />

        <h1 class="text-xl font-bold mt-6 mb-6">Remaining player cards</h1>
        <PlayerCards :players=players :onlyRemainingCards='true' :showPoints='false' />

        <p class="mt-6">
            <button class="rounded-md shadow hover:shadow-md capitalize font-bold text-base py-2 px-4 bg-gray-100 text-gray-700" @click.prevent="downloadCardDeck()">Export Card Deck</button>
        </p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import FileHandler from '@/libs/fileHandler';


export default {
    layout: 'play',
    middleware: ['tableNotCreated', 'gameNotCreated'],
    methods: {
        downloadCardDeck() {
            const data = JSON.stringify(this.fullCardDeck, null, 4);
            FileHandler.downloadFile(data, 'cards.json');
        }
    },
    computed: {
        ...mapGetters({
            players: 'game/players'
        }),
        fullCardDeck() {
            const { players } = this;
            const playersCards = players.map(p => p.card_deck);
            const cards = [].concat.apply([], playersCards);
            cards.forEach((c) => { delete c.rank; });
            return cards;
        }
    }
}
</script>

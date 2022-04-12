<template>
    <div>
        <h1 class="title has-text-weight-bold has-text-centered mb-6">Cards</h1>

        <h1 class="subtitle has-text-weight-bold has-text-centered">Starting card deck</h1>
        <PlayerCards :players=players :onlyRemainingCards='false' :showPoints='true' class="is-fullwidth is-bordered" />

        <h1 class="subtitle has-text-weight-bold has-text-centered">Remaining player cards</h1>
        <PlayerCards :players=players :onlyRemainingCards='true' :showPoints='false' class="is-fullwidth is-bordered" />

        <div class="has-text-centered">
            <a class="button is-light light-shadow has-text-weight-bold" @click.prevent="downloadCardDeck()">Export Card Deck</a>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import gameNotCreatedMiddleware from '@/libs/customMiddlewares/gameNotCreated';


export default {
    layout: 'play',
    methods: {
        downloadCardDeck() {
            const { fullCardDeck } = this;
            const data = JSON.stringify(fullCardDeck, null, 4);
            const blob = new Blob([data], {type: 'application/json'});
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = "cards.json";
            link.click();
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
    },
    async mounted() {
        return await gameNotCreatedMiddleware(this);
    }
}
</script>

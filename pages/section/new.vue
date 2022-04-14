<template>
    <div>
        <AlertModal ref="alertModal" />
        <p class="title is-2 is-capitalized has-text-weight-bold has-text-centered">New Game</p>
        <div class="field">
            <label class="label">Random hands by custom rules</label>
            <div class="control">
                <textarea class="textarea has-text-weight-bold mono-font" placeholder="i.e.: N has 4 clubs AND distribution 4333"></textarea>
            </div>
        </div>
        <div class="buttons is-right">
            <button class="button light-shadow is-success has-text-weight-bold is-capitalized" @click="createRandomCardDeck">Apply rules</button>
        </div>
        <div class="buttons">
            <button class="button light-shadow is-warning has-text-weight-bold is-capitalized" @click="cleanCustomCardDeck">Clean all cards</button>
            <button class="button light-shadow is-info has-text-weight-bold is-capitalized" @click="createRandomCardDeck">Random cards</button>
        </div>
        <PlayerCards :players=customPlayerCards :onlyRemainingCards='false' :showPoints='true' class="mb-3 is-fullwidth is-bordered" />

        <div class="block" v-if="selectedScoreRange.team">
            <div class="has-text-centered is-size-6 is-italic">
                The top team is <span class="is-capitalized">{{selectedScoreRange.team}}</span> with {{selectedScoreRange.points}} total HCP.
            </div>
        </div>
        <div class="buttons is-centered">
            <button class="button light-shadow is-light is-medium has-text-weight-bold is-capitalized" @click="createNewGame()">Play</button>
            <button class="button light-shadow is-light is-medium has-text-weight-bold is-capitalized" @click="createNewGame('load-game')">Load Game</button>
        </div>
    </div>
</template>

<script>
import GameHelpers from '@/libs/gameHelpers';

export default {
    layout: 'play',
    data: function() {
        return {
            players: GameHelpers.players(),
            gameCustoms: GameHelpers.getGameCustoms(),
            selectedScoreRange: {from: 1, to: 40, team: '', points: 0}
        }
    },
    methods: {
        suitColor: function(suit) {
            const suit_color = GameHelpers.suitColor(suit);
            return `card-${suit_color}`;
        },
        suitSymbol: function(suit) {
            return GameHelpers.suitIcon(suit);
        },
        valueIcon: function(card_value) {
            return GameHelpers.cardValueIcon(card_value);
        },
        cleanCustomCardDeck() {
            const { gameCustoms } = this;
            gameCustoms.cards = [];
            gameCustoms.bid = undefined;
            if (gameCustoms.bidding == 'predefined') gameCustoms.bidding = "manual";
        },
        createRandomCardDeck() {
            this.cleanCustomCardDeck();
            const { gameCustoms } = this;
            gameCustoms.cards = GameHelpers.randomCardDeck();
            const top_player = GameHelpers.getTopTeamPlayer(gameCustoms.cards);
            for (const p_id in gameCustoms.players) gameCustoms.players[p_id].show_cards = "no";
            gameCustoms.players[top_player].show_cards = "yes";
            gameCustoms.display_cards_top_team = false;
        },
        loadCustomCardDeck(e) {
            this.cleanCustomCardDeck();
            const { gameCustoms } = this;
            const files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            const reader = new FileReader();
            reader.onload = e => {
                const uploadedCardDeck = JSON.parse(e.target.result);
                gameCustoms.cards = uploadedCardDeck;
            };
            reader.readAsText(files[0]);
        },
        async createNewGame(create_type) {
            const { gameCustoms } = this;
            // let redirect_path = '/section/gamesettings';
            let redirect_path = '/section/play';
            try {
                if (create_type == 'load-game') {
                    redirect_path = '/section/play';
                    await this.$store.dispatch('game/loadSavedGame');
                } else {
                    await this.$store.dispatch('game/newGame', gameCustoms);
                }
            } catch(err) {
                console.log(err);
                GameHelpers.showError(err, this.$refs.alertModal);
                return;
            }
            this.$router.push({path: redirect_path});
            return;
        }
    },
    computed: {
        customPlayerCards() {
            const { cards } = this.gameCustoms;
            const [team_id, points] = GameHelpers.getTopTeamByPoints(cards);
            this.selectedScoreRange.team = team_id;
            this.selectedScoreRange.points = points;
            const players = GameHelpers.players();
            return players.map(p_id => {
                return {
                    id: p_id,
                    card_deck: cards ? cards.filter(c => c.player_id == p_id) : []
                };
            });
        },
        existingCustomCards() {
            return this.customPlayerCards.reduce((acc, p) => acc + p.card_deck.length, 0) > 0;
        }
    }
}
</script>

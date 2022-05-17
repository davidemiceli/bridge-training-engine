<template>
    <div>
        <AlertModal ref="alertModal" />
        <p class="title is-2 is-capitalized has-text-weight-bold has-text-centered">New Game</p>
        <p class="title is-6 mb-3">Random hands by custom rules</p>
        <div class="field has-addons">
            <p class="control">
                <a class="button light-shadow is-light has-text-weight-bold disabled">Example Rules:</a>
            </p>
            <div class="control">
                <div class="select">
                    <select name="predefinedRule" v-model="selectedPredefinedRule">
                        <option :value=index v-for="(item, index) in ruleExamples" :key=index>{{item.name}}</option>
                    </select>
                </div>
            </div>
            <div class="control">
                <button class="button light-shadow is-success has-text-weight-bold" @click="setPredefinedRule()">Select Rule</button>
            </div>
        </div>
        <div class="field">
            <div class="control">
                <textarea class="textarea has-text-weight-bold mono-font code-text" placeholder="i.e.: north.spades(4).clubs(3,5,+KJ,-AQ) east.diamonds(2)" v-model='rule' spellcheck="false"></textarea>
            </div>
        </div>
        <div class="buttons is-right">
            <button class="button light-shadow is-success has-text-weight-bold is-capitalized" @click="newRule()">Apply rule</button>
            <button class="button light-shadow is-warning has-text-weight-bold is-capitalized" @click="cleanRule()">Clean rule</button>
            <button class="button light-shadow is-light has-text-weight-bold" @click="goToHelp('rules')">
                <span class="icon is-small material-icons-outlined mr-1">info</span> Learn More on Rules
            </button>
        </div>
        <div class="buttons">
            <button class="button light-shadow is-light has-text-weight-bold" @click="toggleShowCard()">
                <span v-if="showCards" class="icon is-small material-icons-outlined">visibility_off</span>
                <span v-if="!showCards" class="icon is-small material-icons-outlined">visibility</span>
            </button>
            <button class="button light-shadow is-light has-text-weight-bold is-capitalized" @click="loadCustomCardsTrigger()">Load cards from file</button>
            <button class="button light-shadow is-warning has-text-weight-bold is-capitalized" @click="cleanCustomCardDeck()">Clean all cards</button>
            <button class="button light-shadow is-info has-text-weight-bold is-capitalized" @click="createRandomCardDeck()">Random cards</button>
            <button class="button light-shadow is-light has-text-weight-bold is-capitalized" @click="cardsToRule()" v-if="gameCustoms.cards.length > 0">Edit as rule</button>
            <button class="button light-shadow is-light has-text-weight-bold is-capitalized" @click="downloadCardDeck()" v-if="gameCustoms.cards.length > 0">Export Card Deck</button>
        </div>
        <PlayerCards :players=customPlayerCards :onlyRemainingCards='false' :showPoints='true' class="mb-3 is-fullwidth is-bordered" v-if="showCards" />

        <input class="is-hidden" ref="fileCardsInput" type="file" name="customCardFile" accept="application/json" @change="loadCustomCardDeck($event)">
        <input class="is-hidden" ref="fileGameInput" type="file" name="gameFile" accept="application/json" @change="loadSavedGame($event)">

        <div class="block" v-if="selectedScoreRange.team && showCards">
            <div class="has-text-centered is-size-6 is-italic">
                The top team is <span class="is-capitalized">{{selectedScoreRange.team}}</span> with {{selectedScoreRange.points}} total HCP.
            </div>
        </div>
        <hr class="hr mb-6" v-if="!showCards">
        <div class="buttons is-centered">
            <button class="button light-shadow is-success is-medium has-text-weight-bold is-capitalized" @click="createNewGame()">Play</button>
            <button class="button light-shadow is-light is-medium has-text-weight-bold is-capitalized" @click="loadSavedGameTrigger()">Load Game</button>
        </div>
    </div>
</template>

<script>
import GameHelpers from '@/libs/gameHelpers';
import Rule from '@/libs/rules/rules';
import RuleExamples from '@/libs/rules/examples';
import FileHandler from '@/libs/fileHandler';


export default {
    layout: 'play',
    data: function() {
        return {
            showCards: true,
            selectedPredefinedRule: 0,
            ruleExamples: RuleExamples,
            rule: '',
            players: GameHelpers.players(),
            gameCustoms: GameHelpers.getGameCustoms(),
            selectedScoreRange: {from: 1, to: 40, team: '', points: 0}
        }
    },
    methods: {
        toggleShowCard() {
            this.showCards = !this.showCards;
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
        },
        cleanRule() {
            this.rule = '';
        },
        cleanRuleStr(rule) {
            return rule.trim().replace(/ /g,'').replace(/\n /g, '\n ');
        },
        setPredefinedRule() {
            const { selectedPredefinedRule, ruleExamples } = this;
            this.rule = this.cleanRuleStr(ruleExamples[selectedPredefinedRule].rule);
        },
        async newRule() {
            this.rule = this.cleanRuleStr(this.rule);
            this.cleanCustomCardDeck();
            const { rule, gameCustoms } = this;
            this.$nuxt.$loading.start();
            try {
                gameCustoms.cards = await Rule.translate(rule);
            } catch(err) {
                this.$nuxt.$loading.finish();
                console.error(err);
                console.log(err)
                const message = (err.name == 'RuleError') ? err.message : 'Invalid rule.';
                GameHelpers.showError(message, this.$refs.alertModal);
                return;
            }
            this.$nuxt.$loading.finish();
            const topPlayer = GameHelpers.getTopTeamPlayer(gameCustoms.cards);
            for (const p in gameCustoms.players) gameCustoms.players[p].show_cards = "no";
            gameCustoms.players[topPlayer].show_cards = "yes";
            gameCustoms.display_cards_top_team = false;
        },
        cardsToRule() {
            const { cards } = this.gameCustoms;
            this.rule = Rule.cardsToRule(cards);
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
            const topPlayer = GameHelpers.getTopTeamPlayer(gameCustoms.cards);
            for (const p in gameCustoms.players) gameCustoms.players[p].show_cards = "no";
            gameCustoms.players[topPlayer].show_cards = "yes";
            gameCustoms.display_cards_top_team = false;
        },
        downloadCardDeck() {
            const data = JSON.stringify(this.gameCustoms.cards, null, 4);
            FileHandler.downloadFile(data, 'cards.json');
        },
        loadCustomCardDeck(e) {
            const self = this;
            FileHandler.loadFile(e, async data => {
                const cards = JSON.parse(data);
                try {
                    cards.forEach(c => {
                        const keys = Object.keys(c);
                        const existingKeys = ['card_id', 'suit', 'value', 'player_id'].every(k => keys.includes(k));
                        if (!existingKeys) throw Error('Invalid card file.');
                    });
                } catch(err) {
                    console.log(err);
                    GameHelpers.showError('Invalid card file', self.$refs.alertModal);
                    return;
                }
                this.cleanCustomCardDeck();
                this.gameCustoms.cards = cards;
                return;
            });
        },
        loadCustomCardsTrigger() {
            this.$refs.fileCardsInput.click();
        },
        loadSavedGame(e) {
            FileHandler.loadFile(e, async data => {
                try {
                    const uploadedGame = JSON.parse(data);
                    if (!(uploadedGame && uploadedGame.version)) throw Error('Invalid game file.');
                    await this.$store.dispatch('game/loadGame', uploadedGame);
                } catch(err) {
                    console.log(err);
                    GameHelpers.showError(err, this.$refs.alertModal);
                    return;
                }
                this.$router.push({path: '/game/play'});
                return;
            });
        },
        loadSavedGameTrigger() {
            this.$refs.fileGameInput.click();
        },
        async createNewGame() {
            if (this.gameCustoms.cards.length == 0) this.createRandomCardDeck();
            try {
                await this.$store.dispatch('game/newGame', this.gameCustoms);
            } catch(err) {
                console.log(err);
                GameHelpers.showError(err, this.$refs.alertModal);
                return;
            }
            this.$router.push({path: '/game/play'});
            return;
        },
        goToHelp(helpPage) {
            this.$router.push({path: '/help/'+helpPage});
        }
    },
    computed: {
        customPlayerCards() {
            const { cards } = this.gameCustoms;
            const [team_id, points] = GameHelpers.getTopTeamByPoints(cards);
            this.selectedScoreRange.team = team_id;
            this.selectedScoreRange.points = points;
            const players = GameHelpers.players();
            return players.map(p => {
                return {
                    id: p,
                    card_deck: cards ? cards.filter(c => c.player_id == p) : []
                };
            });
        },
        existingCustomCards() {
            return this.customPlayerCards.reduce((acc, p) => acc + p.card_deck.length, 0) > 0;
        }
    }
}
</script>

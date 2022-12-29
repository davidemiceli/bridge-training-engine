<template>
    <div class="container mx-auto text-gray-800">
        <AlertModal ref="alertModal" />
        <p class="text-4xl font-bold mb-6 text-center">New Hand</p>
        <div class="space-y-2">
            <p class="text-lg font-bold leading-6">Random hands by custom rules</p>
            <div class="flex">
                <div class="hidden sm:inline-flex rounded-l bg-slate-100 capitalize font-bold text-xs py-1 px-2 md:text-base md:py-2 md:px-3 pr-0">Example Rules:</div>
                <select class="inline-flex text-xs py-1 px-2 md:text-base md:py-2 md:px-3 bg-slate-100 outline-0" name="predefinedRule" v-model="selectedPredefinedRule">
                    <option :value=index v-for="(item, index) in ruleExamples" :key=index>{{item.name}}</option>
                </select>
                <button @click="setPredefinedRule()" class="inline-flex rounded-r hover:shadow-md bg-emerald-500 text-white capitalize font-bold text-xs py-1 px-2 md:text-base md:py-2 md:px-3">Select Rule</button>
            </div>
            <textarea class="font-mono resize-none w-full shadow md:rounded-md bg-slate-800 text-slate-50 ligatures-none outline-0 p-4 leading-4 text-xs md:leading-6 md:text-sm" rows="4" placeholder="i.e.: north.spades(4).clubs(3,5,+KJ,-AQ) east.diamonds(2)" v-model='rule' spellcheck="false"></textarea>
        </div>
        <div class="flex space-x-2 justify-end">
            <button class="inline-flex rounded shadow hover:shadow-md capitalize font-bold text-xs py-1 px-2 md:text-base md:py-2 md:px-3 bg-emerald-500 text-white" @click="newRule()">Apply rule</button>
            <button class="inline-flex rounded shadow hover:shadow-md capitalize font-bold text-xs py-1 px-2 md:text-base md:py-2 md:px-3 bg-amber-300 text-gray-700" @click="cleanRule()">Clean rule</button>
            <button class="inline-flex rounded shadow hover:shadow-md capitalize font-bold text-xs py-1 px-2 md:text-base md:py-2 md:px-3 bg-gray-100 text-gray-700" @click="goToHelp('rules')">
                <span class="hidden md:inline-block material-icons-outlined">info</span>
                <span class="text-xs md:hidden material-icons-outlined">info</span>
            </button>
        </div>
        <div class="flex space-x-2 justify-start mt-2">
            <button class="inline-flex rounded shadow hover:shadow-md capitalize font-bold py-1 px-2 md:py-2 md:px-3 bg-gray-100 text-gray-700" @click="toggleShowCard()">
                <span class="hidden md:inline-block material-icons-outlined">{{showCards ? 'visibility_off' : 'visibility'}}</span>
                <span class="text-xs md:hidden material-icons-outlined">{{showCards ? 'visibility_off' : 'visibility'}}</span>
            </button>
            <button class="hidden md:inline-flex rounded shadow hover:shadow-md capitalize font-bold text-xs py-1 px-2 md:text-base md:py-2 md:px-3 bg-gray-100 text-gray-700" @click="loadCustomCardsTrigger()">Load cards from file</button>
            <button class="inline-flex rounded shadow hover:shadow-md capitalize font-bold text-xs py-1 px-2 md:text-base md:py-2 md:px-3 bg-amber-300 text-gray-700" @click="cleanCustomCardDeck()">Clean all cards</button>
            <button class="inline-flex rounded shadow hover:shadow-md capitalize font-bold text-xs py-1 px-2 md:text-base md:py-2 md:px-3 bg-sky-600 text-white" @click="createRandomCardDeck()">Random cards</button>
            <button class="inline-flex rounded shadow hover:shadow-md capitalize font-bold text-xs py-1 px-2 md:text-base md:py-2 md:px-3 bg-gray-100 text-gray-700" @click="cardsToRule()" v-if="gameCustoms.cards.length > 0">Edit as rule</button>
            <button class="hidden md:inline-flex rounded shadow hover:shadow-md capitalize font-bold text-xs py-1 px-2 md:text-base md:py-2 md:px-3 bg-gray-100 text-gray-700" @click="downloadCardDeck()" v-if="gameCustoms.cards.length > 0">Export Card Deck</button>
        </div>
        <PlayerCards :players=customPlayerCards :onlyRemainingCards='false' :showPoints='true' class="mt-3 mb-3" v-if="showCards" />

        <input class="hidden" ref="fileCardsInput" type="file" name="customCardFile" accept="application/json" @change="loadCustomCardDeck($event)">
        <input class="hidden" ref="fileGameInput" type="file" name="gameFile" accept="application/json" @change="loadSavedGame($event)">

        <div class="text-base text-center italic" v-if="selectedScoreRange.team && showCards">
            The top team is <span class="capitalized">{{selectedScoreRange.team}}</span> with {{selectedScoreRange.points}} total HCP.
        </div>

        <hr class="hr mt-6" v-if="!showCards">
        <div class="flex mt-6 space-x-2 justify-center">
            <button class="rounded shadow hover:shadow-md bg-emerald-500 text-white font-bold text-lg py-3 px-6 lg:text-xl" @click="createNewGame()">Play</button>
            <button class="rounded shadow hover:shadow-md bg-gray-100 text-gray-700 font-bold text-lg py-3 px-6 lg:text-xl" @click="loadSavedGameTrigger()">Load Game</button>
        </div>
    </div>
</template>

<script>
import { mapState } from 'pinia';
import { useSettingsStore } from '@/store/settings';
import { useTableStore } from '@/store/table';
import { useGameStore } from '@/store/game';
import GameHelpers from '@/libs/gameHelpers';
import Rule from '@/libs/rules/rules';
import RuleExamples from '@/libs/rules/examples';
import FileHandler from '@/libs/fileHandler';


definePageMeta({
  layout: 'play',
  middleware: ['table-not-created']
});

export default {
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
            const { rule } = this;
            // this.$nuxt.$loading.start();
            try {
                this.gameCustoms.cards = await Rule.translate(rule);
            } catch(err) {
                // this.$nuxt.$loading.finish();
                console.error(err);
                console.log(err)
                const message = (err.name == 'RuleError') ? err.message : 'Invalid rule.';
                GameHelpers.showError(message, this.$refs.alertModal);
                return;
            }
            // this.$nuxt.$loading.finish();
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
                    const gameStore = useGameStore();
                    await gameStore.loadGame(uploadedGame);
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
        async updateTable(username, player, embodyRules) {
            const data = [{username, players: [player], role: 'player', embodyRules}];
            const tableStore = useTableStore();
            await tableStore.reset();
            await tableStore.addPlayers(data);
            await tableStore.new(username);
        },
        async applyGameCustoms() {
            const { gameCustoms } = this;
            const { username } = this.settings;
            const userSettings = (this.table.players && this.table.players[username]) || {};
            const embodyRules = (userSettings && userSettings.embodyRules) || {};
            if (embodyRules && embodyRules.randomPlayer) {
                const player = GameHelpers.getRandomPlayerId();
                await this.updateTable(username, player, embodyRules);
            } else if (embodyRules && embodyRules.topTeam) {
                const player = GameHelpers.getTopTeamPlayer(gameCustoms.cards);
                await this.updateTable(username, player, embodyRules);
            }
        },
        async createNewGame() {
            if (this.gameCustoms.cards.length == 0) this.createRandomCardDeck();
            try {
                await this.applyGameCustoms();
                const gameStore = useGameStore();
                await gameStore.newGame(this.gameCustoms);
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
        ...mapState(useSettingsStore, {
            username: store => store.all.username,
            settings: store => store.all
        }),
        ...mapState(useTableStore, {table: 'all'}),
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
    },
    async mounted() {
        const settingsStore = useSettingsStore();
        const tableStore = useTableStore();
        await settingsStore.get();
        await tableStore.get();
        return;
    }
}
</script>

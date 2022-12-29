import moment from 'moment';
import { defineStore } from 'pinia';
import GameAPIs from '@/services/gameAPIs';


// Game state store
export const useGameStore = defineStore('game', {
    state: () => ({
        data: {}
    }),
    actions: {
        async newGame(params) {
            const data = await GameAPIs.newGame(params);
            this.data = data;
            this.data.timer_clock = moment().set({hour:0, minute:0, second:0, millisecond:0});
            return;
        },
        async applyUiPlayOptions(params) {
            const data = await GameAPIs.updateUiPlayOptions(params);
            this.data = data;
            return;
        },
        async loadGame(savedGame) {
            const data = await GameAPIs.loadGame(savedGame);
            this.data = data;
            return;
        },
        async getGame() {
            const data = await GameAPIs.getGame();
            this.data = data;
            return;
        },
        async nextRuns({runs}) {
            const data = await GameAPIs.nextStep(runs);
            this.data = data;
            return;
        },
        async autoContract(ctx) {
            const data = await GameAPIs.autoContract();
            this.data = data;
            return;
        },
        async play({card, bid, auto}) {
            const newTimer = this.data.timer_clock;
            const data = await GameAPIs.play({newTimer, card, bid, auto});
            this.data = data;
            return;
        },
        async undo({steps}) {
            const data = await GameAPIs.undo(steps);
            this.data = data;
            return;
        },
        incrementTimerClock() {
            this.data.timer_clock = moment(this.data.timer_clock).add(1, 'seconds');
            return;
        }
    },
    getters: {
        timerClock(state) {
            return moment(state.data.timer_clock);
        },
        all(state) {
            return state.data;
        },
        notCreated(state) {
            return state.data && (Object.keys(state.data).length === 0);
        },
        exists(state) {
            return Object.keys(state.data).length > 0;
        },
        players(state) {
            return state.data.players || [];
        },
        playedCards(state) {
            return state.data.loopCards() || [];
        },
        bids(state) {
            const allBidsCount = state.data.bids && state.data.bids.length;
            return allBidsCount > 0 ? state.data.bids : [];
        },
        tricks(state) {
            return state.data.tricks || [];
        },
        handEnded(state) {
            return state.data && state.data.score && (state.data.score.length > 0);
        },
        score(state) {
            return state.data.score || [];
        }
    }
});

/* Use in components in this way:
this.$store.dispatch('game/newGame', item);
this.$store.getters['game/all'];
*/


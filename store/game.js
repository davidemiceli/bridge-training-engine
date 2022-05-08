import moment from 'moment';
import GameAPIs from '@/services/gameAPIs';
import GameHelpers from '@/libs/gameHelpers';


// Game state store
export const state = () => ({
    data: {}
});

export const mutations = {
    INCREMENT_TIMER(state) {
        state.data.timer_clock = moment(state.data.timer_clock).add(1, 'seconds');
    },
    RESET_TIMER(state) {
        state.data.timer_clock = moment().set({hour:0, minute:0, second:0, millisecond:0});
    },
    UPDATE(state, { item }) {
        state.data = item;
    },
    CLEAN(state) {
        state.data = {};
    }
};

export const actions = {
    async newGame(ctx, params) {
        const data = await GameAPIs.newGame(params);
        ctx.commit('UPDATE', {item: data});
        ctx.commit('RESET_TIMER');
        return;
    },
    async applyGameSettings(ctx, params) {
        const data = await GameAPIs.newGameSettings(params);
        ctx.commit('UPDATE', {item: data});
        return;
    },
    async applyUiPlayOptions(ctx, params) {
        const data = await GameAPIs.updateUiPlayOptions(params);
        ctx.commit('UPDATE', {item: data});
        return;
    },
    async loadGame(ctx, savedGame) {
        const data = await GameAPIs.loadGame(savedGame);
        ctx.commit('UPDATE', {item: data});
        return;
    },
    async getGame(ctx) {
        const data = await GameAPIs.getGame();
        ctx.commit('UPDATE', {item: data});
        return;
    },
    async nextRuns(ctx, {runs}) {
        const data = await GameAPIs.nextStep(runs);
        ctx.commit('UPDATE', {item: data});
        return;
    },
    async autoContract(ctx) {
        const data = await GameAPIs.autoContract();
        ctx.commit('UPDATE', {item: data});
        return;
    },
    async play(ctx, {card, bid, auto}) {
        const newTimer = ctx.state.data.timer_clock;
        const data = await GameAPIs.play({newTimer, card, bid, auto});
        ctx.commit('UPDATE', {item: data});
        return;
    },
    async undo(ctx, {steps}) {
        const data = await GameAPIs.undo(steps);
        ctx.commit('UPDATE', {item: data});
        return;
    },
    incrementTimerClock(ctx) {
        ctx.commit('INCREMENT_TIMER');
        return;
    }
};

export const getters = {
    timerClock(state) {
        return moment(state.data.timer_clock);
    },
    playerSettings(state) {
        const { settings } = state.data;
        const players = GameHelpers.players();
        const emptyPlayerSettings = players.reduce((acc, i) => { acc[i] = {}; return acc; }, {});
        return (settings && settings.players) || emptyPlayerSettings;
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
};

/* Use in components in this way:
this.$store.dispatch('game/newGame', item);
this.$store.getters['game/all'];
*/


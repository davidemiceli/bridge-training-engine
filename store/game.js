import moment from 'moment';
import GameAPIs from '@/services/gameAPIs';
import GameHelpers from '@/libs/gameHelpers';


// Game state store
export const state = () => ({
    data: {},
    totalScore: {manches: 0, points: (GameHelpers.teams()).reduce((a,t) => {a[t]=0; return a;}, {}) },
    timerClock: moment().set({hour:0, minute:0, second:0, millisecond:0})
});

export const mutations = {
    UPDATE_TIMER(state, { seconds }) {
        state.timerClock = state.timerClock.add(seconds, 'seconds');
    },
    INCREMENT_TIMER(state) {
        state.timerClock = state.timerClock.add(1, 'seconds');
    },
    RESET_TIMER(state) {
        state.timerClock = moment().set({hour:0, minute:0, second:0, millisecond:0});
    },
    UPDATE_SCORE(state, { items }) {
        if (items.length > 0) state.totalScore.manches += 1;
        items.forEach(s => {
            const { team_id, score, bonus } = s;
            if (!(team_id in state.totalScore.points)) state.totalScore.points[team_id] = 0;
            state.totalScore.points[team_id] += score + bonus;
        });
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
    async saveGame(ctx) {
        await GameAPIs.saveGame();
        return;
    },
    async loadSavedGame(ctx) {
        const data = await GameAPIs.loadSavedGame();
        ctx.commit('UPDATE', {item: data});
        return;
    },
    async loadGame(ctx) {
        const data = await GameAPIs.loadGame();
        ctx.commit('UPDATE', {item: data});
        return;
    },
    async nextRuns(ctx, {runs}) {
        const data = await GameAPIs.nextStep(runs);
        ctx.commit('UPDATE', {item: data});
        return;
    },
    async play(ctx, {card, bid, auto}) {
        const data = await GameAPIs.play({card, bid, auto});
        ctx.commit('UPDATE', {item: data});
        const score = (data && data.score) || [];
        ctx.commit('UPDATE_SCORE', {items: score});
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
    },
    updateTimerClock(ctx, {seconds}) {
        ctx.commit('UPDATE_TIMER', {seconds});
        return;
    }
};

export const getters = {
    timerClock(state) {
        return state.timerClock;
    },
    totalScore(state) {
        return state.totalScore;
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
        return Object.keys(state.data).length === 0;
    },
    exists(state) {
        return Object.keys(state.data).length > 0;
    },
    players(state) {
        return state.data.players || [];
    },
    playedCards(state) {
        return state.data.loop_cards || [];
    },
    bids(state) {
        const all_bids_count = state.data.bids && state.data.bids.length;
        return all_bids_count > 0 ? state.data.bids : [];
    },
    tricks(state) {
        return state.data.tricks || [];
    },
    handEnded(state) {
        return state.data.score && (state.data.score.length > 0);
    },
    score(state) {
        return state.data.score || [];
    }
};

/* Use in components in this way:
this.$store.dispatch('game/newGame', item);
this.$store.getters['game/all'];
*/


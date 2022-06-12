import GameAPIs from '@/services/gameAPIs';


// Game state store
export const state = () => ({
    data: {}
});

export const mutations = {
    UPDATE(state, { item }) {
        state.data = item;
    }
};

export const actions = {
    async get(ctx) {
        const data = await GameAPIs.getTable();
        ctx.commit('UPDATE', {item: data});
        return;
    },
    async update(ctx, params) {
        const data = await GameAPIs.updateTable(params);
        ctx.commit('UPDATE', {item: data});
        return;
    },
    async new(ctx, owner) {
        const data = await GameAPIs.newTable(owner);
        ctx.commit('UPDATE', {item: data});
        return;
    },
    async reset(ctx) {
        const data = await GameAPIs.resetTable();
        ctx.commit('UPDATE', {item: data});
        return;
    },
    async addPlayers(ctx, players) {
        const data = await GameAPIs.getTable();
        data.addPlayers(players);
        const updated = await GameAPIs.updateTable(data);
        ctx.commit('UPDATE', {item: updated});
        return;
    }
};

export const getters = {
    all(state) {
        return state.data;
    },
    notCreated(state) {
        return state.data.owner == null ? true : false;
    }
};

/* Use in components in this way:
this.$store.dispatch('settings/updateSettings', item);
this.$store.getters['settings/all'];
*/


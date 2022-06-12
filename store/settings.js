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
        const data = await GameAPIs.getSettings();
        ctx.commit('UPDATE', {item: data});
        return;
    },
    async update(ctx, params) {
        const data = await GameAPIs.updateSettings(params);
        ctx.commit('UPDATE', {item: data});
        return;
    }
};

export const getters = {
    all(state) {
        return state.data;
    }
};

/* Use in components in this way:
this.$store.dispatch('settings/updateSettings', item);
this.$store.getters['settings/all'];
*/


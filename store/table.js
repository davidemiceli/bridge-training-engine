import { defineStore } from 'pinia';
import GameAPIs from '@/services/gameAPIs';


// Table state store
export const useTableStore = defineStore('table', {
    state: () => ({
        data: {}
    }),
    actions: {
        async get() {
            const data = await GameAPIs.getTable();
            this.data = data;
            return;
        },
        async update(params) {
            const data = await GameAPIs.updateTable(params);
            this.data = data;
            return;
        },
        async new(owner) {
            const data = await GameAPIs.newTable(owner);
            this.data = data;
            return;
        },
        async reset() {
            const data = await GameAPIs.resetTable();
            this.data = data;
            return;
        },
        async addPlayers(players) {
            const data = await GameAPIs.getTable();
            data.addPlayers(players);
            const updated = await GameAPIs.updateTable(data);
            this.data = updated;
            return;
        }
    }, getters: {
        all(state) {
            return state.data;
        },
        notCreated(state) {
            return state.data.owner == null ? true : false;
        }
    }
});

/* Use in components in this way:
this.$store.dispatch('settings/updateSettings', item);
this.$store.getters['settings/all'];
*/


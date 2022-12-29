import { defineStore } from 'pinia';
import GameAPIs from '@/services/gameAPIs';


// Settings state store
export const useSettingsStore = defineStore('settings', {
    state: () => ({
        data: {}
    }),
    actions: {
        async get() {
            const data = await GameAPIs.getSettings();
            this.data = data;
            return;
        },
        async update(params) {
            const data = await GameAPIs.updateSettings(params);
            this.data = data;
            return;
        }
    }, getters: {
        all(state) {
            return state.data;
        }
    }
});

/* Use in components in this way:
this.$store.dispatch('settings/updateSettings', item);
this.$store.getters['settings/all'];
*/


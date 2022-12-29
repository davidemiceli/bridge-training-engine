import { useSettingsStore } from '@/store/settings';
import { useTableStore } from '@/store/table';


export default defineNuxtRouteMiddleware(async (to, from) => {
    try {
        const settingsStore = useSettingsStore();
        const tableStore = useTableStore();
        await settingsStore.get();
        await tableStore.get();
        const tableNotCreated = tableStore.notCreated;
        if (tableNotCreated) return navigateTo({path: '/game/table'});
    } catch(err) {
        console.error(err);
        // return abortNavigation(err);
        navigateTo({path: '/game/table'});
    }
    return;
});

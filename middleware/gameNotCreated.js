import { useGameStore } from '@/store/game';


export default defineNuxtRouteMiddleware(async (to, from) => {
    try {
        const gameStore = useGameStore();
        await gameStore.getGame();
        const gameNotCreated = gameStore.notCreated;
        if (gameNotCreated) navigateTo({path: '/game/hand'});
    } catch(err) {
        console.error(err);
        navigateTo({path: '/game/hand'});
    } finally {
        return;
    }
});


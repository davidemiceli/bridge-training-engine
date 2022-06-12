

export default async function({app, store, redirect}) {
    try {
        await store.dispatch('game/getGame');
        const gameNotCreated = store.getters['game/notCreated'];
        if (gameNotCreated) redirect({path: '/game/hand'});
    } catch(err) {
        console.error(err);
        redirect({path: '/game/hand'});
    } finally {
        return;
    }
}



export default async function({app, store, redirect}) {
    try {
        await store.dispatch('settings/get');
        await store.dispatch('table/get');
        const tableNotCreated = store.getters['table/notCreated'];
        if (tableNotCreated) return redirect({path: '/game/table'});
    } catch(err) {
        console.error(err);
        redirect({path: '/game/table'});
    }
    return;
}

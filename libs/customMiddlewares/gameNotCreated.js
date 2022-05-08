

export default async function(self) {
    const gameNotCreated = self.$store.getters['game/notCreated'];
    if (gameNotCreated) return self.$nextTick(async () => {
        self.$nuxt.$loading.start();
        try {
            await self.$store.dispatch('game/getGame');
            self.$nuxt.$loading.finish();
            return;
        } catch(err) {
            console.error(err);
            self.$nuxt.$loading.finish();
            return self.$router.push({path: '/game/new'});
        }
    });
    return;
}

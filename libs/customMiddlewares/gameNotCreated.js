

export default async function(self) {
    if (!self.gameNotCreated) return;
    return self.$nextTick(async () => {
        self.$nuxt.$loading.start();
        try {
            await self.loadGame();
            self.$nuxt.$loading.finish();
            return;
        } catch(err) {
            self.$nuxt.$loading.finish();
            return self.$router.push({path: '/section/simulation/newgame'});
        }
    });
}

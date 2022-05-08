<template>

    <nav class="container panel">

        <div class="panel-block is-block">
            <PlayOverview :gameTime='timerClock.format("mm:ss")' :contract=contract :tricks=tricks />
        </div>
        <div class="panel-block is-block" v-if="tricks.length > 0">
            <GameAnalysis :players='sideBySidePlayersData()' :contract=contract :tricks=tricks />
        </div>
    </nav>

</template>

<script>
import { mapGetters } from 'vuex';
import GameHelpers from '@/libs/gameHelpers';
import gameNotCreatedMiddleware from '@/libs/customMiddlewares/gameNotCreated';


export default {
    layout: 'play',
    methods: {
        playersData(playerId) {
            const p = GameHelpers.getPlayer(this.players, playerId);
            return {
                ...p,
                show: true,
                showdata: true,
                isturn: false
            };
        },
        sideBySidePlayersData() {
            const { playersData } = this;
            const playersIds = GameHelpers.loopPlayers('north');
            return playersIds.map(p => playersData(p));
        }
    },
    computed: {
        ...mapGetters({
            timerClock: 'game/timerClock',
            gameState: 'game/all',
            tricks: 'game/tricks',
            players: 'game/players'
        }),
        contract() {
            return this.gameState.contract;
        }
    },
    async mounted() {
        return await gameNotCreatedMiddleware(this);
    }
}
</script>

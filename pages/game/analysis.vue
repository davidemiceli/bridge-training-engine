<template>

    <div>
        <div class="container mx-auto text-gray-800 mb-8 border-b border-b-gray-200 divide-y divide-gray-200">
            <PlayOverview :gameTime='timerClock.format("mm:ss")' :contract=contract :tricks=tricks />
        </div>
        <GameAnalysis class="container mx-auto text-gray-800 mb-6" :players='sideBySidePlayersData()' :contract=contract :tricks=tricks v-if="tricks.length > 0" />
    </div>

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

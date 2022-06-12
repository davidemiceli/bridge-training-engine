<template>
    <div>
        <AlertModal ref="alertModal" />
        <PlayTaskModal :taskName=taskPlayOpts.title :isActive=taskPlayOpts.active :doneSteps=taskPlayOpts.steps :donePerc=taskPlayOpts.donePerc @cancelClicked='taskPlayOpts.cancel = true' />
        <ScoreModal :score=gameState.score :contract=gameState.contract @onClickClose="scoreModalToggle" v-if="handEnded && scoreModalOpen" />

        <div class="container mx-auto text-gray-800 mb-8 border-b border-b-gray-200 divide-y divide-gray-200">

            <PlayOverview :gameTime='timerClock.format("mm:ss")' :contract=gameState.contract :tricks=gameState.tricks />

            <div class="flex space-x-1 sm:space-x-2 justify-center items-center pt-2 pb-2">
                <button class="inline-flex items-center rounded capitalize font-bold text-xs py-1 px-2 md:text-base md:py-2 md:px-3 bg-emerald-100 text-teal-800" @click="autoContract" v-if='!contractWasDefined'><span class="text-sm md:text-xl material-icons mr-1">gavel</span>Auto Contract</button>
                <button class="inline-flex items-center rounded capitalize font-bold text-xs py-1 px-2 md:text-base md:py-2 md:px-3 bg-emerald-100 text-teal-800" @click="playAuto" v-if='contractWasDefined'><span class="text-sm md:text-xl material-icons mr-1">precision_manufacturing</span>AI Play</button>
                <button class="inline-flex items-center rounded capitalize font-bold text-xs py-1 px-2 md:text-base md:py-2 md:px-3 bg-gray-100 text-gray-700" @click="playUndo"><span class="text-sm md:text-xl material-icons mr-1">replay</span>Undo</button>
                <button class="inline-flex items-center rounded capitalize font-bold text-xs py-1 px-2 md:text-base md:py-2 md:px-3 bg-gray-100 text-gray-700" @click="playSolve"><span class="text-sm md:text-xl material-icons mr-1">auto_awesome</span>AI Solve</button>
                <button class="inline-flex items-center rounded capitalize font-bold text-xs py-1 px-2 md:text-base md:py-2 md:px-3 bg-gray-100 text-gray-700" @click="playUndoAll"><span class="text-sm md:text-xl material-icons mr-1">restart_alt</span>Undo All</button>
                <button class="inline-flex items-center rounded capitalize font-bold text-xs py-1 px-2 md:text-base md:py-2 md:px-3 bg-amber-300 text-gray-700" @click="scoreModalToggle" v-if="handEnded"><span class="text-sm md:text-xl material-icons mr-1">emoji_events</span>Results</button>
                <button class="inline-flex items-center rounded capitalize font-bold text-xs py-1 px-2 md:text-base md:py-2 md:px-3 bg-sky-100 text-sky-800" @click="saveGameCheckpoint"><span class="text-sm md:text-xl material-icons mr-1">save</span>Save</button>
                <button class="inline-flex items-center rounded capitalize font-bold text-xs py-1 px-2 md:text-base md:py-2 md:px-3" v-bind:class="[uiPlayOptions.player_panel_data ? 'bg-emerald-100 text-teal-800' : 'bg-gray-100 text-gray-700']" @click="toggleGamePlayOptions('player_panel_data')"><span class="text-sm md:text-xl material-icons-outlined">scoreboard</span></button>
                <button class="inline-flex items-center rounded capitalize font-bold text-xs py-1 px-2 md:text-base md:py-2 md:px-3" v-bind:class="[uiPlayOptions.other_player_cards ? 'bg-emerald-100 text-teal-800' : 'bg-gray-100 text-gray-700']" @click="toggleGamePlayOptions('other_player_cards')"><span class="text-sm md:text-xl material-icons">style</span></button>
            </div>

            <BiddingBoxPlayer class="py-3" :playerId=turnOfPlayerId @onSelectBid=playBid v-if='!contractWasDefined && turnOfPlayerId && !biddingIsEnding()' />
        </div>

        <div class="grid grid-cols-3 gap-4 sm:gap-8 justify-center items-center place-content-center text-5xl">
            <div class="col-span-3 justify-self-center">
                <PlayerCardHand :player="playersData('north')" :shapeKind=uiPlayOpts.shapeKind @onClickCard=playNext />
            </div>
            <div class="col-span-1 justify-self-end">
                <PlayerCardHand :player="playersData('west')" :shapeKind=uiPlayOpts.shapeKind @onClickCard=playNext />
            </div>
            <div class="col-span-1">
                <BiddingBoard :bids=bids :loopPlayers=gameState.loop_players @onClickPanel=playNext v-if='!contractWasDefined' />
                <Playground :playedCards=playedCards :shapeKind=uiPlayOpts.shapeKind @onClickPanel=playNext v-if='contractWasDefined' />
            </div>
            <div class="col-span-1 justify-self-start">
                <PlayerCardHand :player="playersData('east')" :shapeKind=uiPlayOpts.shapeKind @onClickCard=playNext />
            </div>
            <div class="col-span-3 justify-self-center">
                <PlayerCardHand :player="playersData('south')" :shapeKind=uiPlayOpts.shapeKind @onClickCard=playNext />
            </div>
        </div>

    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import GameHelpers from '@/libs/gameHelpers';


export default {
    layout: 'play',
    middleware: ['tableNotCreated', 'gameNotCreated'],
    data() {
        return {
            scoreModalOpen: true,
            originalLoop: [],
            taskPlayOpts: {title: '', active: false, cancel: false, steps: 0, donePerc: 0},
            uiPlayOpts: {shapeKind: 'cards'}
        }
    },
    methods: {
        ...mapActions({
            incrementTimerClock: 'game/incrementTimerClock',
            updateTimerClock: 'game/updateTimerClock',
            applyUiPlayOptions: 'game/applyUiPlayOptions',
            saveGame: 'game/saveGame',
            autoContract: 'game/autoContract',
            play: 'game/play',
            undo: 'game/undo'
        }),
        async playBid(bid) {
            await this.playNext(null, bid);
            return true;
        },
        async playNext(card, bid) {
            const { gameState, players, playedCards, gameNotCreated, handEnded, isPlayerTurn } = this;
            // Alert checks
            if (gameNotCreated) return this.showAlert('A new game must be created to play.');
            if (handEnded) return;
            if (this.endBiddingAfter4Pass()) return this.showAlert('After 4 pass, no contract is possible and a new game must be created.');
            // Play bid checks
            if (bid != null && !isPlayerTurn(bid.player_id)) return this.showAlert(`This is not the turn of ${bid.player_id} player.`);
            if (bid != null && bid.bid_id != 'pass' && GameHelpers.bidIsLower(bid.bid_id, gameState.bids)) {
                return this.showAlert(`Player ${bid.player_id} cannot bid less than or equal to the highest bid.`);
            }
            // Play card checks
            if (card != null && !isPlayerTurn(card.player_id)) return this.showAlert(`This is not the turn of ${card.player_id} player.`);
            // Check if player plays a different suit still having cards in the loop suit
            if (card != null && (playedCards.length < 4 && playedCards.length > 0) && card.suit != playedCards[0].suit) {
                const loop_suit = playedCards[0].suit;
                const card_of_loop_suit = GameHelpers.filterCardsBySuit(loop_suit, GameHelpers.getPlayerCards(players, card.player_id));
                if (card_of_loop_suit.length > 0) return this.showAlert(`Player ${card.player_id} cannot play ${card.suit} cards having ${loop_suit} cards yet!`);
            }
            // Play card
            this.$nuxt.$loading.start();
            try {
                await this.play({card, bid});
            } catch(err) {
                console.error(err);
                GameHelpers.showError(err, this.$refs.alertModal);
            }
            this.$nuxt.$loading.finish();
            return true;
        },
        async playAuto() {
            this.$nuxt.$loading.start();
            try {
                await this.play({auto: true});
            } catch(err) {
                console.error(err);
                GameHelpers.showError(err, this.$refs.alertModal);
            }
            this.$nuxt.$loading.finish();
            return true;
        },
        async playUndoAll() {
            const { taskPlayOpts } = this;
            try {
                taskPlayOpts.title = 'Undo all';
                taskPlayOpts.steps = 13 - this.gameState.tricks.length;
                taskPlayOpts.active = true;
                while(true) {
                    await this.undo({steps: 1});
                    await GameHelpers.delay(200);
                    taskPlayOpts.steps = 13 - this.gameState.tricks.length;
                    taskPlayOpts.donePerc = Math.round((taskPlayOpts.steps / 13) * 100);
                    if ((taskPlayOpts.steps == 13 && this.gameState.bids.length == 0) || taskPlayOpts.cancel) break;
                }
            } catch(err) {
                console.error(err);
                GameHelpers.showError(err, this.$refs.alertModal);
            }
            taskPlayOpts.cancel = false;
            taskPlayOpts.active = false;
            return true;
        },
        async playSolve() {
            const { taskPlayOpts, contractWasDefined } = this;
            try {
                taskPlayOpts.title = 'Auto play';
                taskPlayOpts.steps = this.gameState.tricks.length;
                taskPlayOpts.active = true;
                if (!contractWasDefined) this.autoContract();
                while(true) {
                    await this.play({auto: true});
                    await GameHelpers.delay(200);
                    taskPlayOpts.steps = this.gameState.tricks.length;
                    taskPlayOpts.donePerc = Math.round((taskPlayOpts.steps / 13) * 100);
                    if (this.handEnded || taskPlayOpts.cancel) break;
                }
            } catch(err) {
                console.error(err);
                GameHelpers.showError(err, this.$refs.alertModal);
            }
            taskPlayOpts.cancel = false;
            taskPlayOpts.active = false;
            return true;
        },
        saveGameCheckpoint() {
            const { gameState } = this;
            const data = JSON.stringify(gameState, null, 4);
            const blob = new Blob([data], {type: 'application/json'});
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = "game.json";
            link.click();
        },
        async playUndo(e) {
            // Undo last played card
            this.$nuxt.$loading.start();
            await this.undo({steps: 1});
            this.scoreModalToggle();
            this.$nuxt.$loading.finish();
            return true;
        },
        scoreModalToggle() {
            this.scoreModalOpen = this.scoreModalOpen == true ? false : true;
        },
        showAlert(msg) {
            GameHelpers.showError(msg, this.$refs.alertModal);
        },
        isPlayerTurn(playerId) {
            return this.gameState.current_player === playerId;
        },
        isDummyPartner(playerId) {
            return GameHelpers.getPartnerId(this.dummyPlayerId) == playerId;
        },
        showDummyPartner(playerId) {
            const { dummyPlayerId } = this;
            const dummy_partner_id = GameHelpers.getPartnerId(dummyPlayerId);
            return playerId == dummy_partner_id;
        },
        sideBySidePlayers() {
            const { players, uiPlayOptions } = this;
            const player_ids = uiPlayOptions.inline_cards ? ['north', 'south', 'east', 'west'] : ['north', 'east', 'south', 'west'];
            return player_ids.map(p_id => GameHelpers.getPlayer(players, p_id));
        },
        playerToEmbody(playerId) {
            const { username } = this.settings;
            const { players } = this.table;
            if (!players || !username) return false;
            return ['teacher', 'watcher'].includes(players[username].role) || (players[username] && players[username].players.includes(playerId));
        },
        playersData(playerId) {
            const show_other_cards = this.uiPlayOptions.other_player_cards;
            const showdata = this.uiPlayOptions.player_panel_data;
            const p = GameHelpers.getPlayer(this.players, playerId);
            return {
                ...p,
                show: show_other_cards || (this.playerToEmbody(playerId) || (p && p.dummyIsActive && p.dummy)),
                showdata: showdata,
                isturn: this.isPlayerTurn(playerId)
            };
        },
        sideBySidePlayersData() {
            const { playersData } = this;
            return GameHelpers.loopPlayers('north').map(p => playersData(p));
        },
        endBiddingAfter4Pass() {
            return this.bids.length > 3 && this.bids.slice(-4).every(b => b.id == 'pass');
        },
        biddingIsEnding() {
            return this.bids.length > 3 && this.bids.slice(-3).every(b => b.id == 'pass') && this.bids.slice(-4)[0].id != 'pass';
        },
        async toggleGamePlayOptions(name) {
            const { uiPlayOptions } = this;
            const opts = Object.assign({}, uiPlayOptions);
            opts[name] = opts[name] == true ? false : true;
            return await this.applyUiPlayOptions(opts);
        },
        setUiPlayOpts(item, value) {
            this.uiPlayOpts[item] = value;
        },
        getPlayerCards: GameHelpers.getPlayerCards
    },
    computed: {
        ...mapGetters({
            settings: 'settings/all',
            table: 'table/all',
            timerClock: 'game/timerClock',
            gameState: 'game/all',
            gameNotCreated: 'game/notCreated',
            players: 'game/players',
            playedCards: 'game/playedCards',
            bids: 'game/bids',
            handEnded: 'game/handEnded'
        }),
        uiPlayOptions() {
            const { gameState } = this;
            return (gameState && gameState.settings && gameState.settings.uiPlayOptions) || {};
        },
        turnOfPlayerId() {
            return this.gameState.current_player;
        },
        dummyPlayerId() {
            const { players } = this;
            const pl = players.length > 0 ? players.filter(p => p.dummy) : null;
            return (pl && pl.length > 0 && pl[0].id) || null;
        },
        dummyPlayer() {
            const { dummyPlayerId, players } = this;
            return dummyPlayerId ? GameHelpers.getPlayer(players, dummyPlayerId) : null;
        },
        contractWasDefined() {
            const { gameState } = this;
            return gameState && gameState.contractWasDefined && gameState.contractWasDefined();
        }
    },
    async mounted() {
        this.intervalTimerClock = setInterval(() => {
            this.incrementTimerClock();
            this.$forceUpdate();
        }, 1000);
        await this.$store.dispatch('settings/get');
        await this.$store.dispatch('table/get');
        return;
    },
    beforeDestroy() {
        clearInterval(this.intervalTimerClock);
    }
}
</script>

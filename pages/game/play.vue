<template>

    <div>

        <AlertModal ref="alertModal" />
        <PlayTaskModal :taskName=taskPlayOpts.title :isActive=taskPlayOpts.active :doneSteps=taskPlayOpts.steps :donePerc=taskPlayOpts.donePerc @cancelClicked='taskPlayOpts.cancel = true' />
        <ScoreModal :score=gameState.score :contract=gameState.contract @onClickClose="scoreModalToggle" v-if="handEnded && scoreModalOpen" />

        <nav class="container panel">

            <div class="panel-block is-block">
                <PlayOverview :gameTime='timerClock.format("mm:ss")' :contract=gameState.contract :tricks=gameState.tricks />
            </div>

            <div class="panel-block is-block">
                
                <div class="buttons is-centered">
                    <button class="button is-light is-success has-text-weight-bold" @click="autoContract" v-if='!contractWasDefined'><span class="icon is-small material-icons mr-1">gavel</span> Auto Contract</button>
                    <button class="button is-light is-success has-text-weight-bold" @click="playAuto" v-if='contractWasDefined'><span class="icon is-small material-icons mr-1">precision_manufacturing</span> AI Play</button>
                    <button class="button is-light has-text-weight-bold" @click="playUndo"><span class="icon is-small material-icons mr-1">replay</span> Undo</button>
                    <button class="button is-light has-text-weight-bold" @click="playSolve"><span class="icon is-small material-icons mr-1">auto_awesome</span> AI Solve</button>
                    <button class="button is-light has-text-weight-bold" @click="playUndoAll"><span class="icon is-small material-icons mr-1">restart_alt</span> Undo All</button>
                    <button class="button is-light has-text-weight-bold" @click="scoreModalToggle" v-if="handEnded"><span class="icon is-small material-icons has-text-warning-dark mr-1">emoji_events</span> Results</button>
                    <button class="button is-light is-info has-text-weight-bold" @click="saveGameCheckpoint"><span class="icon is-small material-icons mr-1">save</span> Save</button>
                    <button class="button is-light is-warning has-text-weight-bold" @click="setUiPlayOpts('gameAnalysis', !uiPlayOpts.gameAnalysis)">
                        <span v-if="!uiPlayOpts.gameAnalysis"><span class="icon is-small material-icons mr-1">analytics</span> Game Analysis</span>
                        <span v-if="uiPlayOpts.gameAnalysis"><span class="icon is-small material-icons mr-1">dashboard</span> Playground</span>
                    </button>
                    <div class="dropdown is-hoverable">
                        <div class="dropdown-trigger">
                            <button class="button is-light" aria-haspopup="true" aria-controls="dropdown-menu4">
                                <span aria-hidden="true" class="icon is-small material-icons">menu</span>
                            </button>
                        </div>
                        <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                            <div class="dropdown-content has-text-left is-vcentered">
                                <a class="dropdown-item" @click="playUndo"><span class="material-icons is-size-5 mr-2">replay</span> Undo last action</a>
                                <a class="dropdown-item" @click="playAuto"><span class="material-icons is-size-5 mr-2">precision_manufacturing</span> AI play next card</a>
                                <hr class="dropdown-divider">
                                <a class="dropdown-item" @click="toggleGamePlayOptions('player_panel_data')">
                                    <span class="material-icons is-size-5 mr-2">bar_chart</span>
                                    <span v-if="uiPlayOptions.player_panel_data == false">Show</span>
                                    <span v-if="uiPlayOptions.player_panel_data == true">Hide</span> player points
                                </a>
                                <a class="dropdown-item" @click="toggleGamePlayOptions('other_player_cards')">
                                    <span class="material-icons is-size-5 mr-2">style</span>
                                    <span v-if="uiPlayOptions.other_player_cards == false">Show</span>
                                    <span v-if="uiPlayOptions.other_player_cards == true">Hide</span> cards of all players
                                </a>
                                <a class="dropdown-item" @click="setUiPlayOpts('shapeKind', uiPlayOpts.shapeKind == 'cards' ? 'chars' : 'cards')">
                                    <span class="material-icons is-size-5 mr-2">margin</span> Display
                                    <span v-if="uiPlayOpts.shapeKind == 'cards'">cards as text</span>
                                    <span v-if="uiPlayOpts.shapeKind == 'chars'">as cards</span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div class="panel-block is-block" v-if='!contractWasDefined && turnOfPlayerId && !biddingIsEnding()'>
                <BiddingBoxPlayer :playerId=turnOfPlayerId @onSelectBid=playBid />
            </div>
        </nav>

        <div class="columns is-multiline is-mobile" v-if='!uiPlayOpts.gameAnalysis'>
            <div class="column is-12 is-flex is-justify-content-center">
                <PlayerCardHand :player="playersData('north')" :shapeKind=uiPlayOpts.shapeKind @onClickCard=playNext />
            </div>
            <div class="column is-4 is-flex is-justify-content-end">
                <PlayerCardHand :player="playersData('west')" :shapeKind=uiPlayOpts.shapeKind @onClickCard=playNext />
            </div>
            <div class="column is-4 is-flex is-align-items-center">
                <BiddingBoard :bids=bids :loopPlayers=gameState.loop_players @onClickPanel=playNext v-if='!contractWasDefined' />
                <Playground :playedCards=playedCards :shapeKind=uiPlayOpts.shapeKind @onClickPanel=playNext v-if='contractWasDefined' />
            </div>
            <div class="column is-4 is-flex is-justify-content-start">
                <PlayerCardHand :player="playersData('east')" :shapeKind=uiPlayOpts.shapeKind @onClickCard=playNext />
            </div>
            <div class="column is-12 is-flex is-justify-content-center">
                <PlayerCardHand :player="playersData('south')" :shapeKind=uiPlayOpts.shapeKind @onClickCard=playNext />
            </div>
        </div>

        <div class="container" v-if='contractWasDefined && gameState.settings && uiPlayOpts.gameAnalysis'>
            <GameAnalysis class="box" :players='sideBySidePlayersData()' :contract=gameState.contract :tricks=gameState.tricks />
        </div>

    </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import gameNotCreatedMiddleware from '@/libs/customMiddlewares/gameNotCreated';
import GameHelpers from '@/libs/gameHelpers';


export default {
    layout: 'play',
    data() {
        return {
            scoreModalOpen: true,
            alertMsg: null,
            originalLoop: [],
            taskPlayOpts: {title: '', active: false, cancel: false, steps: 0, donePerc: 0},
            uiPlayOpts: {
                shapeKind: 'cards',
                gameAnalysis: false
            }
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
        isDummyPartner(player_id) {
            return GameHelpers.getPartnerId(this.dummyPlayerId) == player_id;
        },
        showDummyPartner(playerId) {
            const { playerSettings, dummyPlayerId } = this;
            const dummy_partner_id = GameHelpers.getPartnerId(dummyPlayerId);
            return playerId == dummy_partner_id && (playerSettings[dummy_partner_id].show_cards == "yes" || playerSettings[dummyPlayerId].show_cards == "yes");
        },
        sideBySidePlayers() {
            const { players, uiPlayOptions } = this;
            const player_ids = uiPlayOptions.inline_cards ? ['north', 'south', 'east', 'west'] : ['north', 'east', 'south', 'west'];
            return player_ids.map(p_id => GameHelpers.getPlayer(players, p_id));
        },
        playersData(player_id) {
            const show_other_cards = this.uiPlayOptions.other_player_cards;
            const showdata = this.uiPlayOptions.player_panel_data;
            const p = GameHelpers.getPlayer(this.players, player_id);
            return {
                ...p,
                show: show_other_cards || (this.playerSettings[player_id].show_cards == "yes" || (p && p.dummyIsActive && p.dummy)),
                showdata: showdata,
                isturn: this.isPlayerTurn(player_id)
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
            timerClock: 'game/timerClock',
            playerSettings: 'game/playerSettings',
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
        return await gameNotCreatedMiddleware(this);
    },
    beforeDestroy() {
        clearInterval(this.intervalTimerClock);
    }
}
</script>

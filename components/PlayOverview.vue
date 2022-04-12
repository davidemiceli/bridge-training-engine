<template>
    <div>

        <nav class="level">
            <div class="level-item has-text-centered" v-if='attack'>
                <div>
                    <p class="heading has-text-weight-bold">Attack</p>
                    <p class="is-size-3" v-bind:class="[suitColor(attack.suit)]">
                        {{cardUnicode(attack.card_id)}}
                    </p>
                </div>
            </div>
            <div class="level-item has-text-centered" v-if="contract">
                <div>
                    <p class="heading has-text-weight-bold">NS / EW Trick Target %</p>
                    <p class="is-size-3">
                        <span>{{targetTricksPerc['north-south']}}%</span>
                        <span class="has-text-weight-light">-</span>
                        <span>{{targetTricksPerc['east-west']}}%</span>
                    </p>
                </div>
            </div>
            <div class="level-item has-text-centered" v-if="contract">
                <div>
                    <p class="heading has-text-weight-bold">NS / EW Trick Target</p>
                    <p class="is-size-3">
                        <span>{{targetTricks['north-south']}}</span>
                        <span class="has-text-weight-light">-</span>
                        <span>{{targetTricks['east-west']}}</span>
                    </p>
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div>
                    <p class="heading has-text-weight-bold">Time</p>
                    <p class="has-text-weight-light is-size-3">{{gameTime}}</p>
                </div>
            </div>
            <div class="level-item has-text-centered" v-if="contract">
                <div>
                    <p class="heading has-text-weight-bold">NS / EW Tricks</p>
                    <p class="is-size-3">
                        <span>{{teamTricks['north-south']}}</span>
                        <span class="has-text-weight-light">-</span>
                        <span>{{teamTricks['east-west']}}</span>
                    </p>
                </div>
            </div>
            <div class="level-item has-text-centered" v-if="contract">
                <div>
                    <p class="heading has-text-weight-bold">Contract {{contract.player_id}}</p>
                    <p class="is-size-3">
                        <strong>{{contract.value}}</strong>
                        <strong class="card-suit is-uppercase" v-bind:class="[suitColor(contract.trump)]">{{suitSymbol(contract.trump)}}</strong>
                        <small class="has-text-danger-dark has-text-weight-bold" v-if="contract.double">X</small>
                        <small class="has-text-info-dark has-text-weight-bold" v-if="contract.redouble">XX</small>
                    </p>
                </div>
            </div>
        </nav>

    </div>
</template>

<script>
import GameHelpers from '@/libs/gameHelpers';


export default {
    props: {
        gameTime: String,
        contract: Object,
        tricks: Array
    },
    methods: {
        suitColor(suit) {
            const suit_color = GameHelpers.suitColor(suit);
            return `card-${suit_color}`;
        },
        suitSymbol: GameHelpers.suitIcon,
        cardUnicode(card_id) {
            return GameHelpers.cardUnicode(card_id);
        },
        deltaTricks(value) {
            return value < 0 ? `-${Math.abs(value)}` : `+${value}`;
        }
    },
    computed: {
        attack() {
            return this.tricks && this.tricks[0] && this.tricks[0][0];
        },
        teamTricks() {
            return GameHelpers.teamTricks(this.tricks);
        },
        totalTricks() {
            const { tricks } = this;
            return (tricks && tricks.length) || 0;
        },
        targetTricks() {
            const { contract } = this;
            const contract_team = GameHelpers.getPlayerTeam(contract.player_id);
            const attack_team = GameHelpers.getOpponentTeam(contract.player_id);
            const target_tricks = {};
            target_tricks[contract_team] = 6 + contract.value;
            target_tricks[attack_team] = 7 - contract.value;
            return target_tricks;
        },
        targetTricksPerc() {
            const tricks = this.teamTricks;
            const target_tricks = this.targetTricks;
            const target_tricks_perc = {};
            for (const team in target_tricks) {
                target_tricks_perc[team] = (Math.abs(tricks[team] / target_tricks[team]) * 100).toFixed(0);
            }
            return target_tricks_perc;
        }
    }
}
</script>

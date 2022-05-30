<template>
    <div class="grid grid-flow-col auto-cols-max gap-8 grid-flow-col-dense place-content-center mb-3 md:gap-12 lg:gap-20">
        <div class="col-span-1 text-center md:space-y-2 text-gray-700" v-if='attack'>
            <p class="text-xs tracking-widest uppercase font-bold">Attack</p>
            <p class="font-cards text-xl md:text-4xl align-middle" v-bind:class="[suitColor(attack.suit)]">
                {{cardUnicode(attack.card_id)}}
            </p>
        </div>
        <div class="col-span-1 text-center md:space-y-2 text-gray-700 hidden lg:block" v-if="contract">
            <p class="text-xs tracking-widest uppercase font-bold">NS / EW Trick Target %</p>
            <p class="text-xl md:text-4xl">
                <span>{{targetTricksPerc['north-south']}}%</span>
                <span class="md:font-light">-</span>
                <span>{{targetTricksPerc['east-west']}}%</span>
            </p>
        </div>
        <div class="col-span-1 text-center md:space-y-2 text-gray-700" v-if="contract">
            <p class="text-xs tracking-widest uppercase font-bold">NS / EW Tricks</p>
            <p class="text-xl md:text-4xl">
                <span>{{teamTricks['north-south']}}</span>
                <span class="md:font-light">-</span>
                <span>{{teamTricks['east-west']}}</span>
            </p>
        </div>
        <div class="col-span-1 text-center md:space-y-2 text-gray-700">
            <p class="text-xs tracking-widest uppercase font-bold">Time</p>
            <p class="text-xl md:text-4xl">{{gameTime}}</p>
        </div>
        <div class="col-span-1 text-center md:space-y-2 text-gray-700 hidden sm:block" v-if="contract">
            <p class="text-xs tracking-widest uppercase font-bold">NS / EW Trick Target</p>
            <p class="text-xl md:text-4xl">
                <span>{{targetTricks['north-south']}}</span>
                <span class="md:font-light">-</span>
                <span>{{targetTricks['east-west']}}</span>
            </p>
        </div>
        <div class="col-span-1 text-center md:space-y-2 text-gray-700" v-if="contract">
            <p class="text-xs tracking-widest uppercase font-bold">Contract {{contract.player_id}}</p>
            <p class="text-xl md:text-3xl">
                <strong class="text-gray-800">{{contract.value}}</strong>
                <strong class="font-textcards uppercase text-xl md:text-3xl" v-bind:class="[suitColor(contract.trump)]">{{suitSymbol(contract.trump)}}</strong>
                <small class="text-red-600 font-bold" v-if="contract.double">X</small>
                <small class="text-sky-600 font-bold" v-if="contract.redouble">XX</small>
            </p>
        </div>
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
            return GameHelpers.suitColor(suit);
        },
        suitSymbol: GameHelpers.suitIcon,
        cardUnicode(card_id) {
            return GameHelpers.cardUnicode(card_id);
        },
        deltaTricks(value) {
            return value < 0 ? `-${Math.abs(value)}` : `+${value}`;
        },
        percNormalization(tricks, target) {
            switch(true) {
                case (target + tricks) == 0: return 1;
                case (target == 0 && tricks > 0): return tricks / 1;
                default: return tricks / target;
            }
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
            const targetTricks = {};
            targetTricks[contract_team] = 6 + contract.value;
            targetTricks[attack_team] = 7 - contract.value;
            return targetTricks;
        },
        targetTricksPerc() {
            const { teamTricks, targetTricks } = this;
            const targetTricksPerc = {};
            for (const team in targetTricks) {
                const [tricks, target] = [teamTricks[team], targetTricks[team]];
                const perc = this.percNormalization(tricks, target);
                targetTricksPerc[team] = (Math.abs(perc) * 100).toFixed(0);
            }
            return targetTricksPerc;
        }
    }
}
</script>

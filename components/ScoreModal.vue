<template>
    <div class="absolute inset-0 z-30 bg-black/20 flex items-center justify-center">
        <div class="w-full max-w-md shadow-lg rounded-lg p-4 bg-white leading-8">
            <div class="flex items-center justify-between pb-4 border-b border-b-gray-200">
                <h3 class="text-2xl text-gray-800 font-bold flex items-center">
                    <span class="material-icons mr-2">emoji_events</span>
                    <span>Scores</span>
                </h3>
            </div>
            <div class="mt-6 text-center">
                <p><span class="material-icons text-yellow-600">emoji_events</span></p>
                <p class="text-lg mb-6 font-bold uppercase" v-bind:class="[winnerTeam]">{{winnerTeam}}</p>

                <table class="table table-auto w-full border-collapse bg-white font-bold text-center">
                    <thead>
                        <tr>
                            <th class="border-b border-slate-100 p-2">Team</th>
                            <th class="border-b border-slate-100 p-2">Contract</th>
                            <th class="border-b border-slate-100 p-2">Bonus</th>
                            <th class="border-b border-slate-100 p-2">Score</th>
                            <th class="border-b border-slate-100 p-2">Total score</th>
                            <th class="border-b border-slate-100 p-2">Tricks</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="s in score" :key=s.team_id>
                            <td class="border-b border-slate-100 p-2 uppercase" v-bind:class="[s.team_id]">{{teamAbbr(s.team_id)}}</td>
                            <td class="border-b border-slate-100 p-2">
                                <SingleCard :card=contractName :cardSize='6' class="has-text-centered" v-if="s.contract" />
                            </td>
                            <td class="border-b border-slate-100 p-2">
                                <span v-if="s.contract">{{s.bonus_kind}} +{{s.bonus}}</span>
                            </td>
                            <td class="border-b border-slate-100 p-2">{{s.score}}</td>
                            <td class="border-b border-slate-100 p-2">
                                <span v-if="s.contract">{{s.score + s.bonus}}</span>
                                <span v-if="!s.contract">{{s.score}}</span>
                            </td>
                            <td class="border-b border-slate-100 p-2">
                                <span v-if="s.contract">{{deltaTricks(s.winned_tricks - 6 - contract.value)}}</span>
                                <span v-if="!s.contract">{{deltaTricks(s.winned_tricks - (7 - contract.value))}}</span>
                                <span>({{s.winned_tricks}})</span>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div class="mt-4 text-right space-x-2">
                    <NuxtLink to="" class="rounded-md shadow hover:shadow-md capitalize font-bold text-base py-2 px-4 bg-gray-100 text-gray-700" @click.native="onClickClose()">Close</NuxtLink>
                    <NuxtLink to="/game/new" class="rounded-md shadow hover:shadow-md capitalize font-bold text-base py-2 px-4 bg-emerald-500 text-white">New game</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import GameHelpers from '@/libs/gameHelpers';


export default {
    props: {
        contract: Object,
        score: Array
    },
    methods: {
        teamAbbr(teamId) {
            const splitted = teamId.split('-');
            return splitted[0][0] + splitted[1][0];
        },
        deltaTricks(value) {
            return value < 0 ? `-${Math.abs(value)}` : `+${value}`;
        },
        onClickClose() {
            this.$emit('onClickClose');
        }
    },
    computed: {
        contractName() {
            const { contract } = this;
            return {suit: contract.trump, value: contract.id.split(' ')[0], card_id: contract.id}
        },
        contractTeam() {
            return GameHelpers.getPlayerTeam(this.contract.player_id);
        },
        winnerTeam() {
            const { score } = this;
            const score_copy = score.map(s => s);
            score_copy.sort((a, b) => b.score - a.score);
            return score_copy[0].team_id;
        }
    }
}
</script>

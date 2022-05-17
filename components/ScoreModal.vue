<template>
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-card">

            <header class="modal-card-head">
                <p class="modal-card-title icon-text">
                    <span class="icon material-icons">emoji_events</span>
                    <span>Scores</span>
                </p>
            </header>

            <section class="modal-card-body">
                <p class="has-text-centered"><span class="material-icons has-text-warning-dark">emoji_events</span></p>
                <p class="is-size-5 mb-6 has-text-centered has-text-weight-bold is-uppercase" v-bind:class="[winnerTeam]">{{winnerTeam}}</p>

                <!-- Score table -->
                <div class="table-container">
                    <table class="table is-fullwidth has-text-centered has-text-weight-bold">
                        <thead>
                            <tr>
                                <th>Team</th>
                                <th>Contract</th>
                                <th>Bonus</th>
                                <th>Score</th>
                                <th>Total score</th>
                                <th>Tricks</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="s in score" :key=s.team_id>
                                <td class="is-vcentered is-uppercase" v-bind:class="[s.team_id]">{{teamAbbr(s.team_id)}}</td>
                                <td class="is-vcentered">
                                    <SingleCard :card=contractName :cardSize='6' class="has-text-centered" v-if="s.contract" />
                                </td>
                                <td class="is-vcentered">
                                    <span v-if="s.contract">{{s.bonus_kind}} +{{s.bonus}}</span>
                                </td>
                                <td class="is-vcentered">{{s.score}}</td>
                                <td class="is-vcentered">
                                    <span v-if="s.contract">{{s.score + s.bonus}}</span>
                                    <span v-if="!s.contract">{{s.score}}</span>
                                </td>
                                <td class="is-vcentered">
                                    <span v-if="s.contract">{{deltaTricks(s.winned_tricks - 6 - contract.value)}}</span>
                                    <span v-if="!s.contract">{{deltaTricks(s.winned_tricks - (7 - contract.value))}}</span>
                                    <span>({{s.winned_tricks}})</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- Score table -->
            </section>

            <footer class="modal-card-foot" style="justify-content: center;">
                <NuxtLink to="" class="button is-medium is-light has-text-weight-bold light-shadow is-capitalized" @click.native="onClickClose()">Close</NuxtLink>
                <NuxtLink to="/game/new" class="button is-medium is-success has-text-weight-bold light-shadow is-capitalized">New game</NuxtLink>
            </footer>

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

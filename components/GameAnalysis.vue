<template>

    <div>

        <div class="columns is-multiline is-mobile">
            <div class="column is-6 is-flex is-justify-content-center is-align-items-center" v-for="p in playersData(trickIndex)" :key=p.id>
                <PlayerCardHand :player=p :shapeKind="'cards'" :interactive='false' :inlineAlternate='false' />
            </div>
        </div>

        <div class="columns is-multiline is-mobile" v-if='trickIndex != null'>
            <div class="column is-3 has-text-centered pb-0" v-for="c in selectedTrickCards" :key=c.player_id>
                <div class="is-uppercase has-text-weight-bold">{{c.player_id}}</div>
            </div>
            <div class="column is-3 has-text-centered pt-0" v-for="c in selectedTrickCards" :key=c.card_id>
                <SingleCard :card=c :cardSize='1' :shapeKind="'cards'" />
            </div>
        </div>

        <div class="table-container">
            <table class="table is-striped is-narrow is-fullwidth has-text-centered">
                <thead>
                    <tr>
                        <th>Trick</th>
                        <th>By</th>
                        <th>Team tricks</th>
                        <th>Winning</th>
                        <th>Type</th>
                        <th>Combinations</th>
                        <th>Loop</th>
                        <th>Played cards</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(t, t_index) in tricksView" :key=t_index @click="updateTrickIndex(t_index)" class="is-clickable" v-bind:class="[t_index === trickIndex ? 'table-row-selected' : '']">
                        <td class="is-vcentered has-text-weight-bold">{{t_index+1}}</td>
                        <td class="is-vcentered has-text-weight-bold" v-bind:class="[t.player_id]">
                            <span class="is-uppercase mr-1">{{teamAbbr(t.player_id)}}</span>
                            <span class="is-capitalized">{{teamType(t.player_id)}}</span>
                        </td>
                        <td class="is-vcentered has-text-weight-bold" v-bind:class="[t.player_id]">{{countTricks(t.team_id, t_index+1)}}</td>
                        <td>
                            <span class="is-capitalized has-text-weight-bold mr-1" v-bind:class="[t.player_id]">{{t.player_id[0]}}</span>
                            <SingleCard :card=t :cardSize='6' tagType='span' />
                        </td>
                        <td class="is-vcentered is-uppercase is-size-7 has-text-weight-bold is-italic">{{playType(t, t_index)}}</td>
                        <td>
                            <SingleCard :card='t.all_cards[0]' :cardSize='6' tagType='span' class="mr-1" /><SingleCard :card='t.all_cards[2]' :cardSize='6' tagType='span' />
                            <span class="has-text-weight-bold has-text-grey ml-2 mr-2">vs</span>
                            <SingleCard :card='t.all_cards[1]' :cardSize='6' tagType='span' class="mr-1" /><SingleCard :card='t.all_cards[3]' :cardSize='6' tagType='span' />
                        </td>
                        <td class="is-vcentered">
                            <span v-for="c in t.all_cards" :key=c.card_id class="is-capitalized has-text-weight-bold" v-bind:class="[c.player_id]">
                                {{c.player_id[0]}}
                            </span>
                        </td>
                        <td>
                            <span v-for="c in t.all_cards" :key=c.card_id>
                                <SingleCard :card=c :cardSize='6' class="mr-2" tagType='span' />
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>

</template>

<script>
import GameHelpers from '@/libs/gameHelpers';


export default {
    props: {
        players: Array,
        contract: Object,
        tricks: Array
    },
    data: function() {
        return {
            playedCards: this.playedCards,
            trickIndex: null
        };
    },
    methods: {
        teamAbbr(player_id) {
            const team = GameHelpers.getPlayerTeam(player_id).split('-');
            return [team[0][0], team[1][0]].join('');
        },
        updateTrickIndex(i) {
            this.trickIndex = i;
        },
        playersData(trickIndex) {
            const tIndex = trickIndex || 0;
            const playedCards = this.tricks
                .filter((_, i) => i <= tIndex)
                .reduce((acc, trickCards) => {
                    for (const c of trickCards) acc[c.card_id] = true;
                    return acc;
                }, {});
            return this.players.map(p => {
                return {
                    ...p,
                    show: true,
                    showdata: true,
                    cards: p.card_deck.filter(c => !(c.card_id in playedCards))
                }
            });
        },
        teamType(player_id) {
            const { contract } = this;
            return (GameHelpers.getPlayerTeam(contract.player_id) == GameHelpers.getPlayerTeam(player_id)) ? 'defence' : 'attack';
        },
        countTricks(teamId, trickIndex) {
            return this.tricks.slice(0, trickIndex).reduce((a,t) => a + t.filter(c => c.team_id == teamId && c.winner).length, 0);
        },
        playType(t, t_index) {
            // http://www.scuolabridgemultimediale.it/esperti-varie/sbm_dizionario.html
            const { contract } = this;
            const contract_team = GameHelpers.getPlayerTeam(contract.player_id);
            const contract_partner = GameHelpers.getPartnerId(contract.player_id);
            const trick_position = t.all_cards.map((c, i) => c.card_id == t.card_id ? i : null).filter(c => c != null)[0] + 1;
            const players = this.playersData(t_index);
            const defence_trick = (contract_team == GameHelpers.getPlayerTeam(t.player_id));
            const partner_id = GameHelpers.getPartnerId(t.player_id);
            const partner_card = t.all_cards.filter(c => c.player_id == partner_id)[0];
            const defence_starting = contract_team == GameHelpers.getPlayerTeam(t.all_cards[0].player_id);
            const defence_cards = t.all_cards.filter(c => (c.player_id == contract_partner) || (c.player_id == contract.player_id));
            const opponent_cards = t.all_cards.filter(c => (c.player_id != partner_id) && (c.player_id != t.player_id));
            const trickby = defence_trick ? 'defence' : 'attack';
            if (t.suit == contract.trump) {
                // Drawing trumps (Battere le atout)
                const opponent_contract_trick_trumps = opponent_cards.filter(c => contract.trump == c.suit && c.suit == t.suit).length;
                const defence_contract_trick_trumps = defence_cards.filter(c => contract.trump == c.suit && c.suit == t.suit).length;
                if (defence_starting && defence_trick && opponent_contract_trick_trumps > 0) return 'drawing trumps';
                if (defence_contract_trick_trumps == 2 && opponent_contract_trick_trumps == 0) return 'long trump trick';
                if (partner_card.suit != t.suit) return "partner's trump ruffing";
                if (opponent_contract_trick_trumps == 0) return 'trump ruffing';
                return 'trump trick';
            }
            if (defence_trick) {
                // TODO: Understand better
                // Impasse finesse [S->3, W(K)->5, N->Q, S->J or S(K)->3, W->Q, N->J, S->4]
                // On a defence trick, The trick is not the last played card, First opponent to play holds on his deck a greater card than the winner card
                const first_opponent = opponent_cards[0].player_id;
                const opponent_has_gt_card = opponent_cards.filter(c => c.suit == t.suit && c.value > t.value && c.player_id == first_opponent).length;
                if (trick_position < 4 && opponent_has_gt_card) return 'finesse';
            }
            if (t.suit == partner_card.suit) {
                // Long trick (presa di lunga)
                const opponent_suit_cards = opponent_cards.filter(c => c.suit == t.suit).length;
                if (opponent_suit_cards == 0) return 'long trick';
                // Establishment (affrancamento)
                return 'establishment';
            }
            // Ruffing (taglio)
            if (partner_card.suit != t.suit) {
                const opponent_suit_cards = opponent_cards.filter(c => c.suit == t.suit).length;
                if (opponent_suit_cards == 0) return 'long ruffing';
                return 'partner ruffing';
            }
            const honor_trick = t.value > 10;
            return `${honor_trick ? 'honor ' : ''}${trickby} trick`;
        }
    },
    computed: {
        tricksView() {
            return this.tricks.map(t => Object.assign({all_cards: t}, t.filter(c => c.winner)[0]));
        },
        selectedTrickCards() {
            return this.tricks[this.trickIndex || 0];
        }
    }
}
</script>

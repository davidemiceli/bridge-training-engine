<template>
    <div class="container mx-auto text-gray-800">
        <AlertModal ref="alertModal" />
        <p class="text-4xl font-bold mb-4 text-center">Table</p>

        <div class="grid grid-cols-10 gap-8">

            <div class="col-span-5 flex flex-col">

                <div class="border-b border-gray-200">
                    <ul class="flex flex-wrap justify-center -mb-px text-lg font-bold text-center text-gray-700 uppercase">
                        <li class="mr-2">
                            <span @click="setTab('training')" class="inline-flex p-4 rounded-t-lg border-b-2 cursor-pointer group"
                            v-bind:class="[tabs.training ? 'text-sky-800 border-sky-800 active' : 'border-transparent hover:text-gray-800 border-gray-300']">
                            <span class="material-icons-outlined mr-1">psychology</span>Training</span>
                        </li>
                    </ul>
                </div>

                <div class="flex justify-center items-center my-6">
                    <p class="inline-flex text-lg font-bold mr-4">Username</p>
                    <input
                        class="inline-flex rounded-l font-bold text-base py-2 px-3 bg-slate-100 outline-0"
                        name="username" v-model="username" placeholder="Username" />
                    <button @click="setUsername(username)" class="inline-flex rounded-r hover:shadow-md bg-emerald-500 text-white capitalize font-bold text-base py-2 px-3">Update</button>
                </div>

                <div v-if="tabs.training" class="space-y-6">
                    <p class="text-2xl font-bold text-center">Play against the AI and/or yourself</p>
                    <p class="text-base font-bold text-center">Choose one or more players to embody</p>
                    <div class="flex justify-center">
                        <div class="inline-flex mr-4" v-for="p in players" :key=p>
                            <div class="ml-2 flex items-center text-sm font-medium cursor-pointer" v-bind:class="[selectedPlayers.includes(p) ? 'text-sky-700' : 'text-gray-800']" @click='togglePlayers(p)'>
                                <span v-if="selectedPlayers.includes(p)" class="material-icons-outlined">radio_button_checked</span>
                                <span v-if="!selectedPlayers.includes(p)" class="material-icons-outlined">radio_button_unchecked</span>
                                <span class="ml-1 uppercase font-bold">{{p}}</span>
                            </div>
                        </div>
                    </div>
                    <p class="text-base font-bold text-center">Choose an embody rule<br /><span class="italic">(it will overwrite the choosen player)</span></p>
                    <div class="flex justify-center">
                        <div class="inline-flex mr-4" v-for="k in playerEmbodyRules" :key=k.value>
                            <div class="ml-2 flex items-center text-sm font-medium cursor-pointer" v-bind:class="[k.value == embodyRule ? 'text-sky-700' : 'text-gray-800']" @click='toggleEmbodyRule(k.value)'>
                                <span v-if='k.value == embodyRule' class="material-icons-outlined">radio_button_checked</span>
                                <span v-if='k.value != embodyRule' class="material-icons-outlined">radio_button_unchecked</span>
                                <span class="ml-1 uppercase font-bold">{{k.text}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="text-center">
                        <button @click="newTable('training')" class="rounded shadow bg-emerald-500 text-white capitalize font-bold text-lg py-3 px-20">Next</button>
                    </div>
                </div>
                <div v-if="tabs.multiplayer" class="space-y-6">
                    <p class="text-2xl font-bold text-center">Play against other users and/or AI.</p>
                    <p class="text-base font-bold text-center">Add usernames to invite</p>
                    <div class="text-center">
                        <input
                            class="rounded font-bold text-base py-2 px-3 bg-slate-100 outline-0"
                            name="userNames" v-model="userNames" placeholder="username1,username2,etc.."/>
                    </div>
                    <p class="text-base font-bold text-center">Players to embody</p>
                    <div class="flex justify-center">
                        <div class="inline-flex items-center mr-4" v-for="p in players" :key=p>
                            <input type="checkbox" :checked='selectedPlayers.includes(p)' @change='togglePlayers($event, p)' class="w-4 h-4 bg-gray-100 rounded border-gray-300">
                            <label for="red-checkbox" class="ml-2 text-sm font-medium text-gray-900">{{p}}</label>
                        </div>
                    </div>
                    <p class="text-base font-bold text-center">Role</p>
                    <div class="text-center">
                        <select class="rounded text-base bg-slate-100 font-bold outline-0 capitalize py-2 px-3" name="role" v-model="role">
                            <option :value=o v-for="o in roles" :key=o>{{o}}</option>
                        </select>
                    </div>
                    <div class="text-center">
                        <button @click='addPlayers()' class="rounded shadow bg-emerald-500 text-white capitalize font-bold text-base py-2 px-3">Add users</button>
                    </div>
                    <div class="text-center">
                        <button @click='newTable()' class="rounded shadow bg-emerald-500 text-white capitalize font-bold text-lg py-3 px-20">Next</button>
                    </div>
                </div>
            </div>

            <div class="col-span-5 flex flex-col mt-6 space-y-6">
                <p class="text-4xl text-center">Table Composition</p>
                <p class="text-xl text-center italic" v-if="table.owner">(Owner: {{table.owner}})</p>
                <div class="mt-8 border-b-2 border-gray-200 text-base box-border border">
                    <table class="table-auto w-full border-collapse bg-white text-center">
                        <thead class="border-b-2 border-gray-200">
                            <tr>
                                <th class="py-1 px-2">#</th>
                                <th class="py-1 px-2">Username</th>
                                <th class="py-1 px-2">Role</th>
                                <th class="py-1 px-2">Players</th>
                                <th class="py-1 px-2">Embody Rule</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-300">
                            <tr v-for="(t, i) in tablePlayers" :key=i @click="updatePlayers(t.username)" class="cursor-pointer odd:bg-white even:bg-slate-100" v-bind:class="[i === updatePlayersIndex ? '!border-2 !border-gray-400 !shadow-inner' : '']">
                                <td class="py-1 px-2 font-bold">{{i+1}}</td>
                                <td class="py-1 px-2 font-bold">{{t.username}}</td>
                                <td class="py-1 px-2 font-bold capitalize">{{t.role}}</td>
                                <td class="py-1 px-2 font-bold uppercase">{{t.players.map(p => p[0]).sort().join(', ')}}</td>
                                <td class="py-1 px-2 font-bold capitalize">{{displayEmbodyRule(t)}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import GameError from '@/libs/errors';
import GameHelpers from '@/libs/gameHelpers';


export default {
    layout: 'play',
    data: function() {
        const players = GameHelpers.players();
        const roles = ['player', 'watcher', 'teacher'];
        return {
            tabs: {training: true}, // multiplayer: false},
            username: '',
            updatePlayersIndex: null,
            players: players,
            playerEmbodyRules: [
                {text: 'Top Team Player', value: 'topTeam'},
                {text: 'Random Player', value: 'randomPlayer'}
            ],
            embodyRule: null,
            selectedPlayers: [],
            roles: roles,
            userNames: '',
            player: players[0],
            role: roles[0]
        }
    },
    methods: {
        setTab(name) {
            Object.keys(this.tabs).forEach(n => { this.tabs[n] = false; });
            this.tabs[name] = true;
        },
        togglePlayers(p) {
            if (!this.selectedPlayers.includes(p)) this.selectedPlayers.push(p);
            else this.selectedPlayers = this.selectedPlayers.filter(pl => pl != p);
        },
        toggleEmbodyRule(k) {
            this.embodyRule = this.embodyRule == k ? null : k;
        },
        async setUsername(o) {
            this.$nuxt.$loading.start();
            try {
                const len = o.length;
                if (len > 16 || len < 6) throw new GameError('Username must have between 6 and 16 characters.');
                const settings = Object.assign({}, this.settings, {username: o});
                await this.$store.dispatch('settings/update', settings);
            } catch(err) {
                this.$nuxt.$loading.finish();
                console.error(err);
                const message = (err.name == 'GameError') ? err.message : 'Internal Server Error.';
                GameHelpers.showError(message, this.$refs.alertModal);
                return;
            }
            this.$nuxt.$loading.finish();
            return;
        },
        async newTable(tableType) {
            this.$nuxt.$loading.start();
            try {
                const { username } = this.settings;
                if (!username) throw new GameError('Missing username. Please enter a valid username.');
                if (tableType == 'training') await this.trainingTable();
                await this.$store.dispatch('table/new', username);
                this.$router.push({path: '/game/hand'});
            } catch(err) {
                this.$nuxt.$loading.finish();
                console.error(err);
                const message = (err.name == 'GameError') ? err.message : 'Internal Server Error.';
                GameHelpers.showError(message, this.$refs.alertModal);
                return;
            }
            this.$nuxt.$loading.finish();
            return;
        },
        async trainingTable() {
            const { username } = this.settings;
            const { embodyRule, selectedPlayers, players } = this;
            const choosenPlayers = selectedPlayers ? (selectedPlayers.length == 0 ? players : selectedPlayers) : this.players;
            const playerEmbodyRules = this.playerEmbodyRules.reduce((a,v) => { a[v.value] = false; return a; }, {});
            if (embodyRule in playerEmbodyRules) playerEmbodyRules[embodyRule] = true;
            const data = [{
                username, players: choosenPlayers, role: 'player',
                embodyRules: playerEmbodyRules
            }];
            await this.$store.dispatch('table/reset');
            await this.$store.dispatch('table/addPlayers', data);
            return;
        },
        async addPlayers() {
            this.$nuxt.$loading.start();
            try {
                const { selectedPlayers, role } = this;
                this.userNames = this.userNames.trim().replace(/\s/g, '');
                const userNames = this.userNames.split(',');
                const players = selectedPlayers || [];
                const data = userNames.map(u => ({username: u, players, role}));
                await this.$store.dispatch('table/addPlayers', data);
            } catch(err) {
                this.$nuxt.$loading.finish();
                console.error(err);
                const message = (err.name == 'GameError') ? err.message : 'Internal Server Error.';
                GameHelpers.showError(message, this.$refs.alertModal);
                return;
            }
            this.$nuxt.$loading.finish();
            return;
        },
        async updatePlayers(username) {
            const {players, role, embodyRules} = this.table.players[username];
            this.selectedPlayers = players;
            this.role = role;
            this.embodyRule = null;
            for (const [k, v] of Object.entries(embodyRules)) {
                if (v) this.embodyRule = k;
            }
            this.userNames = username;
        },
        displayEmbodyRule(t) {
            const { playerEmbodyRules } = this;
            const eRules = t.embodyRules && Object.entries(t.embodyRules).filter(([k,v]) => v).map(v => v[0]).sort();
            return eRules && eRules.map(r => r && playerEmbodyRules.filter(er => er.value == r)[0].text).join(', ');
        }
    },
    computed: {
        ...mapGetters({
            settings: 'settings/all',
            table: 'table/all'
        }),
        tablePlayers() {
            const { table } = this;
            return table && table.players ? Object.values(table.players) : [];
        }
    },
    async mounted() {
        await this.$store.dispatch('settings/get');
        await this.$store.dispatch('table/get');
        this.username = this.settings.username || '';
        const table = this.$store.getters['table/all'];
        return;
    }
}
</script>

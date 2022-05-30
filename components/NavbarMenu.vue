<template>
    <div class="fixed z-20 inset-0" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-black/20" aria-hidden="true" @click=onClickClose></div>
        <div class="fixed top-4 right-4 w-full max-w-xs bg-white rounded-lg shadow-lg p-6 text-base text-slate-900">
            <button type="button" @click=onClickClose class="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300" tabindex="0">
                <span class="sr-only">Close navigation</span>
                <span class="material-icons align-middle">close</span>
            </button>
            <ul class="space-y-4">
                <li><button class="hover:text-gray-600 flex items-center align-middle" @click="goTo('/game/new')"><span class="material-icons mr-1">add_circle_outline</span>New</button></li>
                <li><button class="hover:text-gray-600 flex items-center align-middle" @click='goTo("/game/play")'><span class="material-icons mr-1">play_arrow</span>Play</button></li>
            </ul>
            <ul class="space-y-4 mt-4 pt-4 border-t border-slate-200">
                <li><button class="hover:text-gray-600 flex items-center align-middle" @click="goTo('/game/cards')"><span class="material-icons mr-1">style</span>Cards</button></li>
                <li><button class="hover:text-gray-600 flex items-center align-middle" @click="goTo('/game/bids')"><span class="material-icons mr-1">gavel</span>Bids</button></li>
                <li><button class="hover:text-gray-600 flex items-center align-middle" @click="goTo('/game/analysis')"><span class="material-icons mr-1">analytics</span>Analysis</button></li>
            </ul>
            <ul class="space-y-4 mt-4 pt-4 border-t border-slate-200">
                <li><button class="hover:text-gray-600 flex items-center align-middle" @click="goTo('/help')"><span class="material-icons mr-1">support</span>Help</button></li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    methods: {
        onClickClose() {
            this.$emit('onClickClose');
        },
        goTo(urlPath) {
            this.onClickClose();
            return this.$router.push({path: urlPath});
        }
    }
}
</script>

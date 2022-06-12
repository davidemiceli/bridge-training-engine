<template>
    <header class="flex-none relative z-10 text-base leading-6 font-menu py-4 text-gray-700 bg-white" v-bind:class="[withMenu ? 'border-b border-b-gray-300' : '']">

        <nav aria-label="main navigation" class="container mx-auto px-8 xl:px-16">
            <div class="flex items-center flex-wrap sm:flex-nowrap">
                <NuxtLink to="/" class="flex-none text-gray-900">
                    <span class="sr-only">Bridge Training Engine</span>
                    <img src="logo.png" height="14"><!-- perfect height 28px -->
                </NuxtLink>
                <div class="hidden lg:flex w-full flex-none w-auto ml-auto flex items-center">
                    <div class="font-mono text-xs font-bold align-middle">v{{version}}</div>
                    <NuxtLink to='/sponsor' class="flex items-center ml-6 text-sky-600 hover:text-sky-800 uppercase">
                        <span class="material-icons mr-1">favorite</span>Support
                    </NuxtLink>
                    <a v-if="withMenu" @click="showMenu(true)" class="hover:text-gray-600 ml-6 flex items-center cursor-pointer uppercase">
                        <span class="sr-only">Navigation</span>
                        <span class="material-icons mr-1">sports_esports</span>Game
                    </a>
                    <a href="https://github.com/davidemiceli/bridge-training-engine" target="_blank" class="hover:text-gray-600 ml-6 flex items-center cursor-pointer uppercase">
                        <span class="sr-only">Github</span>
                        <svg viewBox="0 0 16 16" class="w-5 h-5" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                    </a>
                </div>
                <div class="lg:hidden w-full flex-none w-auto ml-auto flex" v-if="withMenu">
                    <button type="button" @click="showMenu(true)" class="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600">
                        <span class="sr-only">Navigation</span>
                        <span class="material-icons align-middle">menu</span>
                    </button>
                </div>
            </div>
        </nav>

        <NavbarMenu v-if="menu" @onClickClose="showMenu(false)" />

    </header>
</template>

<script>

export default {
    props: {
        withMenu: Boolean
    },
    data() {
        return {
            version: this.$config.appVersion,
            menu: false
        }
    },
    methods: {
        showMenu(v) {
            this.menu = Boolean(v);
        }
    }
}
</script>

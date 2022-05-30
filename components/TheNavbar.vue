<template>
    <header class="flex-none relative z-10 text-base leading-6 font-menu py-4 text-gray-700 bg-white" v-bind:class="[withMenu ? 'ring-1 ring-gray-300' : '']">

        <nav aria-label="main navigation" class="container mx-auto px-8 xl:px-16">
            <div class="flex items-center flex-wrap sm:flex-nowrap">
                <NuxtLink to="/" class="flex-none text-gray-900">
                    <span class="sr-only">Bridge Training Engine</span>
                    <img src="logo.png" height="14"><!-- perfect height 28px -->
                </NuxtLink>
                <div class="hidden lg:flex w-full flex-none w-auto ml-auto flex items-center">
                    <div class="font-mono text-xs font-bold align-middle">v{{version}}</div>
                    <a class="flex items-center mx-6 text-sky-600 hover:text-sky-800 uppercase" href="https://www.paypal.com/donate/?business=BRMDA5LUN5QB6&no_recurring=0&currency_code=EUR&amount=20&recurring_payment=Y&item_number=Donation%20to%20support%20Bridge%20Training%20Engine">
                        <span class="material-icons mr-1">favorite</span>Donate
                    </a>
                    <a v-if="withMenu" @click="showMenu(true)" class="hover:text-gray-600 flex items-center cursor-pointer uppercase">
                        <span class="material-icons mr-1">sports_esports</span>Game
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

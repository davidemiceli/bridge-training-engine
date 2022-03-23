<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="container">

            <div class="navbar-brand">
                <NuxtLink to="/" class="navbar-item">
                    <img src="logo.png" height="14"><!-- perfect height 28px -->
                </NuxtLink>
            </div>

            <div class="navbar-end">

                <!-- Donate button -->
                <div class="navbar-item">
                    <div class="buttons">
                        <a href="https://www.paypal.com/donate/?business=BRMDA5LUN5QB6&no_recurring=0&currency_code=EUR" class="button is-small light-shadow is-info has-text-weight-bold is-uppercase landing-font">
                            <span class="material-icons mr-1">paid</span>Donate
                        </a>
                    </div>
                </div>

                <!-- Game Menu -->
                <div class="navbar-item has-dropdown is-hoverable" v-if="withMenu">
                    <a class="navbar-link">
                        <span class="material-icons mr-2">sports_esports</span>Game
                    </a>
                    <div class="navbar-dropdown">
                        <NuxtLink class="navbar-item" to="/section/simulation/newgame"><span class="material-icons mr-1">add_circle_outline</span>New game</NuxtLink>
                        <hr class="navbar-divider">
                        <NuxtLink class="navbar-item" to="/section/simulation/play"><span class="material-icons mr-1">play_arrow</span>Play</NuxtLink>
                        <NuxtLink class="navbar-item" to="/section/simulation/gamesettings"><span class="material-icons mr-1">settings</span>Game settings</NuxtLink>
                        <hr class="navbar-divider">
                        <NuxtLink class="navbar-item" to="/section/simulation/cards"><span class="material-icons mr-1">style</span>Cards</NuxtLink>
                        <NuxtLink class="navbar-item" to="/section/simulation/bids"><span class="material-icons mr-1">gavel</span>Bids</NuxtLink>
                        <NuxtLink class="navbar-item" to="/section/simulation/tricks"><span class="material-icons mr-1">front_hand</span>Tricks</NuxtLink>
                    </div>
                </div>

            </div>

        </div>
    </nav>
</template>

<script>

export default {
    props: {
        withMenu: Boolean
    },
    data() {
        return {}
    }
}
</script>
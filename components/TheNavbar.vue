<template>
    <nav class="navbar navbar-common" role="navigation" aria-label="main navigation">
        <div class="container">

            <div class="navbar-brand">
                <NuxtLink to="/" class="navbar-item">
                    <img src="logo.png" height="14"><!-- perfect height 28px -->
                </NuxtLink>
            </div>

            <div class="navbar-end">

                <!-- App Version -->
                <div class="navbar-item landing-font is-size-7 has-text-weight-bold is-lowercase">v{{version}}</div>
                <!-- Sponsor link -->
                <!-- <NuxtLink class="navbar-item" to="/sponsor">Sponsor</NuxtLink> -->
                <!-- Donate link -->
                <a class="navbar-item donate-link" target="_blank" href="https://www.paypal.com/donate/?business=BRMDA5LUN5QB6&no_recurring=0&currency_code=EUR&amount=20&recurring_payment=Y&item_number=Donation%20to%20support%20Bridge%20Training%20Engine">
                    <span class="material-icons mr-1">favorite</span>Donate
                </a>

                <!-- Game Menu -->
                <div class="navbar-item has-dropdown is-hoverable" v-if="withMenu">
                    <a class="navbar-link">
                        <span class="material-icons mr-1">sports_esports</span>Game
                    </a>
                    <div class="navbar-dropdown">
                        <NuxtLink class="navbar-item" to="/game/new"><span class="material-icons mr-1">add_circle_outline</span>New</NuxtLink>
                        <NuxtLink class="navbar-item" to="/game/play"><span class="material-icons mr-1">play_arrow</span>Play</NuxtLink>
                        <!-- <NuxtLink class="navbar-item" to="/game/gamesettings"><span class="material-icons mr-1">settings</span>Settings</NuxtLink> -->
                        <hr class="navbar-divider">
                        <NuxtLink class="navbar-item" to="/game/cards"><span class="material-icons mr-1">style</span>Cards</NuxtLink>
                        <NuxtLink class="navbar-item" to="/game/bids"><span class="material-icons mr-1">gavel</span>Bids</NuxtLink>
                        <NuxtLink class="navbar-item" to="/game/tricks"><span class="material-icons mr-1">front_hand</span>Tricks</NuxtLink>
                        <hr class="navbar-divider">
                        <NuxtLink class="navbar-item" to="/help"><span class="material-icons mr-1">support</span>Help</NuxtLink>
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
        return {
            version: this.$config.appVersion
        }
    }
}
</script>
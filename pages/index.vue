<template>
    <div class="landing-font">
        <div class="columns is-vcentered">
            <div class="column is-5">
                <div class="block">
                    <p class="title is-1 is-capitalized has-text-weight-bold">Bridge Training Engine</p>
                    <p class="subtitle landing-subtitle mt-6">
                        A playable Bridge Solver and Game Analyzer focused on Training,
                        Free and Open Source, with a simple UI.
                    </p>
                    <p class="mt-6">
                        <NuxtLink to="/section/new" class="button p-5 light-shadow is-success has-text-weight-bold">Start Now</NuxtLink>
                        <a href="https://github.com/davidemiceli/bridge-training-engine" target="_blank" class="button p-5 light-shadow is-light has-text-weight-bold">Learn More</a>
                    </p>
                </div>
            </div>
            <div class="column has-text-centered">
                <img src="playground.png" style="width: 560px;">
            </div>
        </div>
        <hr class="hr">
        <div class="columns is-multiline is-mobile has-text-left">
            <div class="column is-4">
                <p class="title has-text-weight-bold is-5">For training</p>
                <p class="subtitle landing-subtitle is-6 mt-1">
                    Training with Bridge, even without a partner, or alone just to improve your logical reasoning skills.
                </p>
            </div>
            <div class="column is-4">
                <p class="title has-text-weight-bold is-5">Closer to a human player</p>
                <p class="subtitle landing-subtitle is-6 mt-1">
                    A Double Dummy AI that try to emulate as closely as possible an human player.
                </p>
            </div>
            <div class="column is-4">
                <p class="title has-text-weight-bold is-5">Playable</p>
                <p class="subtitle landing-subtitle is-6 mt-1">
                    Play against the AI and/or yourself, step-by-step for every single card to play.
                </p>
            </div>
        </div>
        <hr class="hr">
        <div class="columns is-multiline is-mobile has-text-left">
            <div class="column is-4">
                <p class="title has-text-weight-bold is-5">Hand Editor</p>
                <p class="subtitle landing-subtitle is-6 mt-1">
                    UI to generate custom hands automatically or semi-automatically, as well as load existing ones.
                </p>
            </div>
            <div class="column is-4">
                <p class="title has-text-weight-bold is-5">Game Analysis</p>
                <p class="subtitle landing-subtitle is-6 mt-1">
                    Analyze the game with statistics and a simple UI.
                </p>
            </div>
            <div class="column is-4">
                <p class="title has-text-weight-bold is-5">Free and Open Source</p>
                <p class="subtitle landing-subtitle is-6 mt-1">
                    The platform is Open Source with a MIT license, and free for all.
                </p>
            </div>
        </div>
        <hr class="hr">
        <p class="title has-text-weight-bold has-text-centered is-uppercase is-5"><span class="material-icons has-text-info mr-1">recommend</span>Support</p>
        <p class="has-text-centered">
            <a href="https://www.paypal.com/donate/?business=BRMDA5LUN5QB6&no_recurring=0&currency_code=EUR" target="_blank" class="button is-large light-shadow donate-button has-text-weight-bold">
                <img src="PayPalDonate.svg" style="height: 34px;" />
            </a>
        </p>
        <!-- <div class="columns is-multiline is-centered">
            <div class="column is-3 has-text-centered">
                <p class="mb-3 is-uppercase is-6">One-Time Donation</p>
                <p>
                    <a href="https://www.paypal.com/donate/?business=BRMDA5LUN5QB6&no_recurring=0&currency_code=EUR" target="_blank" class="button is-large light-shadow donate-button has-text-weight-bold">
                        <img src="PayPalDonate.svg" style="height: 34px;" />
                    </a>
                </p>
            </div>
            <div class="column is-3 has-text-centered">
                <p class="mb-3 is-uppercase is-6">Monthly Donation</p>
                <p>
                    <a href="https://www.patreon.com" target="_blank" class="button is-large white-button light-shadow">
                        <img src="patreon.svg" style="height: 26px;" />
                    </a>
                </p>
            </div>
        </div> -->
        <hr class="hr">
        <p class="is-size-7 has-text-weight-bold">
            By Davide Miceli<br />
            Source Code <a class="footer-link" href="https://github.com/davidemiceli/bridge-training-engine/blob/main/LICENSE" target="_blank">MIT Licensed</a> 2022
        </p>
    </div>
</template>

<script>

export default {
    layout: 'landing'
}
</script>

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
                        <NuxtLink to="/game/new" class="button p-5 light-shadow is-success has-text-weight-bold">Start Now</NuxtLink>
                        <a href="https://github.com/davidemiceli/bridge-training-engine" target="_blank" class="button p-5 light-shadow is-light has-text-weight-bold">Learn More</a>
                    </p>
                </div>
            </div>
            <div class="column has-text-centered">
                <img src="playground.png" style="width: 560px;">
            </div>
        </div>

        <div v-for="(featureGroup, gi) in features" :key=gi>
            <hr class="hr">
            <div class="columns is-multiline has-text-left">
                <div class="column is-4" v-for="(f, fi) in featureGroup" :key=fi>
                    <p class="title has-text-weight-bold is-5">{{f.title}}</p>
                    <p class="subtitle landing-subtitle is-6 mt-1">{{f.description}}</p>
                </div>
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
    </div>
</template>

<script>

export default {
    layout: 'landing',
    data: function() {
        return {
            features: [
                [
                    {title: 'For training', description: 'Training with Bridge, even without a partner, or alone just to improve your logical reasoning skills.'},
                    {title: 'Closer to a human player', description: 'A Double Dummy AI that try to emulate as closely as possible an human player.'},
                    {title: 'Playable', description: 'Play against the AI and/or yourself, step-by-step for every single card to play.'}
                ],
                [
                    {title: 'Hand Editor', description: 'UI to generate custom hands automatically or semi-automatically, as well as load existing ones.'},
                    {title: 'Game Analysis', description: 'Analyze the game with statistics and a simple UI.'},
                    {title: 'Free and Open Source', description: 'The platform is Open Source with a MIT license, and free for all.'}
                ]
            ]
        }
    }
}
</script>

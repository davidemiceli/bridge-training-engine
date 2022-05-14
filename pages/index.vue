<template>
    <div class="landing-font">
        <div class="columns is-vcentered mb-0">
            <div class="column is-5">
                <div class="block">
                    <p class="title is-1 is-capitalized has-text-weight-bold">Bridge Training Engine</p>
                    <p class="subtitle landing-subtitle mt-6">
                        A playable Bridge Solver and Game Analyzer focused on Training and Play Experiments.
                        Free and Open Source.
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
            <hr>
            <div class="columns is-multiline has-text-left">
                <div class="column is-6" v-for="(f, fi) in featureGroup" :key=fi>
                    <p class="title has-text-centered has-text-weight-bold is-5">{{f.title}}</p>
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
    </div>
</template>

<script>

export default {
    layout: 'landing',
    data: function() {
        return {
            features: [
                [
                    {title: 'For Training and Experimentation', description: 'Test your play on a certain type of hands. Re-Play hands or their variations. Practice with biddings. Experiment and Design new conventions.'},
                    {title: 'Play alone or with AI', description: 'Play against the AI and/or yourself, step-by-step for every single card to play. A Double Dummy AI will try to emulate as closely as possible an human player.'}
                ],
                [
                    {title: 'Hand Editor', description: 'UI to generate custom hands automatically or semi-automatically, export them or load existing ones. A meta language is provided to place constraints on the random generation of hands.'},
                    {title: 'Game Analysis', description: 'Analyze the game with statistics and a simple UI. An automatic explanation of your play, for each trick, is provided.'}
                ]
            ]
        }
    }
}
</script>

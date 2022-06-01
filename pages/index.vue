<template>
    <div class="font-mono container px-8 xl:px-16 mx-auto">
        <div class="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-1 lg:grid-cols-2">
            <div class="col-span-1 place-self-center justify-self-start text-gray-800 lg:max-w-lg">
                <div class="sm:text-center space-y-8 md:pt-auto md:space-y-10 lg:space-y-14 lg:text-left">
                    <p class="font-bold leading-tight text-2xl sm:text-4xl xl:text-5xl">Bridge Training Engine</p>
                    <p class="text-base font-medium text-gray-700 leading-relaxed md:text-lg md:leading-loose xl:text-xl xl:leading-loose">
                        A playable Bridge Solver and Game Analyzer focused on Training and Play Experiments.
                        Free and Open Source.
                    </p>
                    <p class="mt-4 lg:mt-6">
                        <NuxtLink to="/game/new" class="rounded shadow hover:shadow-md bg-emerald-500 text-white font-bold text-sm py-3 px-4 sm:py-3 sm:px-6 lg:text-base lg:py-4 lg:px-8">Start Now</NuxtLink>
                        <a href="https://github.com/davidemiceli/bridge-training-engine" target="_blank" class="rounded shadow hover:shadow-md bg-gray-100 text-gray-700 font-bold text-sm py-3 px-4 sm:py-3 sm:px-6 lg:text-base lg:py-4 lg:px-8">Learn More</a>
                    </p>
                </div>
            </div>
            <div class="col-span-1 place-self-center">
                <img src="playground.png" class="w-auto">
            </div>
        </div>

        <div class="grid grid-cols-1 gap-6 lg:gap-8 lg:grid-cols-2">
            <ul v-for="(f, i) in features" :key=i class="rounded-lg shadow-sm bg-slate-50 text-gray-800 space-y-8 p-4 col-span-1">
                <li class="font-bold text-center text-base sm:text-lg">{{f.title}}</li>
                <li class="text-gray-700 font-medium leading-16 tracking-wide text-sm sm:text-md">{{f.description}}</li>
            </ul>
        </div>

        <p class="mt-6 font-bold text-center uppercase mb-3 flex justify-center items-center text-lg text-gray-700">
            <span class="material-icons mr-1 text-sky-600">favorite</span>Support
        </p>
        <p class="text-center">
            <a 
                href="https://www.paypal.com/donate/?business=BRMDA5LUN5QB6&no_recurring=0&currency_code=EUR&amount=0&recurring_payment=Y&item_number=Donation%20to%20support%20Bridge%20Training%20Engine"
                target="_blank" class="rounded shadow bg-gray-100 hover:shadow-md py-3 px-6 font-bold text-md text-gray-700 inline-flex items-center">
                <img src="PayPalDonate.svg" class="fill-current w-30">
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
                {title: 'For Training and Experimentation', description: 'Test your play on a certain type of hands. Re-Play hands or their variations. Practice with biddings. Experiment and Design new conventions.'},
                {title: 'Play alone or with AI', description: 'Play against the AI and/or yourself, step-by-step for every single card to play. A Double Dummy AI will try to emulate as closely as possible an human player.'},
                {title: 'Hand Editor', description: 'UI to generate custom hands automatically or semi-automatically, export them or load existing ones. A meta language is provided to place constraints on the random generation of hands.'},
                {title: 'Game Analysis', description: 'Analyze the game with statistics and a simple UI. An automatic explanation of your play, for each trick, is provided.'}
            ]
        }
    }
}
</script>

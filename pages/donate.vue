<template>
    <div class="max-w-3xl px-2 mx-auto text-gray-800">
        <div class="space-y-10 text-center">
            <p class="text-lg">
                Developing and maintaining Bridge Training Engine involves a lot of effort.<br />
                If you use Bridge Training Engine and feel it is useful to you, please consider backing us.<br />
                Before to continue, support us with a free donation.
            </p>
        </div>
        <div class="mt-6 mb-8 text-center">
            <p class="flex justify-center py-6"><img src="PayPalDonate.svg" class="fill-current w-30"></p>
            <div>
                <button v-for="(a,i) in amts" :key=i class="rounded-lg box-border border-2 shadow hover:shadow-md py-3 px-4 font-bold text-md text-gray-700 ml-2 first:ml-0" @click="selectAmount(a)">&euro; {{a}}</button>
            </div>
            <p class="mt-4">
                <button class="rounded-lg box-border border-2 shadow hover:shadow-md py-3 px-4 font-bold text-md text-gray-700 ml-2" @click="selectAmount(0)">&euro; Custom Amount</button>
            </p>
        </div>
        <div class="mt-12 text-center">
            <NuxtLink to="/game/hand" class="rounded shadow hover:shadow-md bg-emerald-500 text-white font-bold text-sm py-3 px-4 sm:py-3 sm:px-6 lg:text-base lg:py-4 lg:px-8">
                <span>Skip and Continue</span>
                <span class="ml-1 material-icons-outlined align-middle">east</span>
            </NuxtLink>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'textual',
    data: function() {
        return {
            amts: [10, 20, 50, 100, 500]
        }
    },
    methods: {
        selectAmount(a) {
            const href = `https://www.paypal.com/donate/?business=BRMDA5LUN5QB6&no_recurring=0&currency_code=EUR&amount=${a}&recurring_payment=Y&item_number=Donation%20to%20support%20Bridge%20Training%20Engine`;
            window.open(href, '_blank');
        }
    }
}
</script>

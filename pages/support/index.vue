<template>
    <div class="content is-medium">
        <div class="block has-text-centered has-text-weight-bold">
            <p class="title is-2">Support</p>
            <p class="subtitle is-3">How can we help you?</p>
            <p class="mt-6">Learn more about topics and find resources that will help you with Bridge Training Engine.</p>
        </div>
        <hr class="hr">
        <div class="buttons is-centered" v-for="(v, i) in sections" :key=i>
            <NuxtLink class="button light-shadow is-light is-medium has-text-weight-bold is-capitalized" :to="'/support/' + v.url">{{v.name}}</NuxtLink>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'play',
    data: function() {
        return {
            sections: [
                {name: 'Hand Editor Rules', url: 'rules'}
            ]
        }
    }
}
</script>

<template>
    <div class="max-w-4xl mx-auto space-y-6 mb-6">
        <div class="text-gray-700 space-y-4 text-center">
            <p class="text-5xl font-bold">Knowledge Base</p>
            <p class="text-3xl">How can we help you?</p>
            <p class="text-base font-bold">Learn more about topics and find resources that will help you.</p>
        </div>
        <div class="border-t p-8 text-center" v-for="(v, i) in sections" :key=i>
            <NuxtLink class="rounded-lg shadow bg-gray-100 hover:shadow-md py-4 px-8 font-bold text-md text-gray-700" :to="'/help/' + v.url">{{v.name}}</NuxtLink>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'textual',
    data: function() {
        return {
            sections: [
                {name: 'Hand Editor Rules', url: 'rules'}
            ]
        }
    }
}
</script>

<template>
    <div class="container px-2 mx-auto mb-6">
        <div class="text-gray-700 space-y-4 mb-4 text-center">
            <p class="text-5xl font-bold">Knowledge Base</p>
            <p class="text-3xl">How can we help you?</p>
            <p class="text-base font-bold">Learn more about topics and find resources that will help you.</p>
        </div>
        <div class="flex flex-rows gap-4 border-t py-8 items-center content-center" v-for="(v, i) in sections" :key=i>
            <div class="basis-1/3 text-2xl">{{v.name}}</div>
            <div class="basis-2/3 text-center">
                <div class="inline ml-2 first:ml-0" v-for="(vs, is) in v.subsections" :key=is>
                    <NuxtLink class="rounded-lg shadow bg-gray-100 hover:shadow-md py-3 px-4 font-bold text-md text-gray-700" :to="'/help/' + vs.url">{{vs.name}}</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
definePageMeta({
    layout: "textual",
});

export default {
    setup() {
        const sections = [
            {
                name: 'Table',
                subsections: [
                    {name: 'New Table', url: 'table'}
                ]
            },
            {
                name: 'Hand',
                subsections: [
                    {name: 'New Hand', url: 'newhand'},
                    {name: 'Hand Editor Rules', url: 'rules'}
                ]
            },
            {
                name: 'Play',
                subsections: [
                    {name: 'Play', url: 'play'}
                ]
            },
            {
                name: 'Analysis',
                subsections: [
                    {name: 'Analysis', url: 'analysis'}
                ]
            }
        ]
        return { sections };
    }
}
</script>

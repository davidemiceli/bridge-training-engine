<template>
    <div class="absolute inset-0 z-30 bg-black/20 flex items-center justify-center" v-if="isActive">
        <div class="w-full max-w-md shadow-lg rounded-lg p-4 bg-white leading-8">
            <div class="flex items-center justify-between pb-4 border-b border-b-gray-200">
                <h3 class="text-2xl text-gray-800 font-bold flex items-center">
                    <span class="material-icons mr-2">settings_suggest</span>
                    <span>{{taskName}} is running...</span>
                </h3>
            </div>
            <div class="mt-6 text-right">
                <p class="mb-4 text-base font-bold text-gray-700 text-left">A total of {{doneSteps}} steps have currently been performed until now.</p>
                <div class="flex justify-center my-5">
                    <div class="w-full bg-gray-200 rounded-lg h-2.5 dark:bg-gray-700">
                        <div class="bg-green-600 h-2.5 rounded-full" :style="{'width': donePerc+'%'}"></div>
                    </div>
                </div>
                <button @click="cancelClicked" class="rounded-md shadow hover:shadow-md capitalize font-bold text-base py-2 px-4 bg-gray-100 text-gray-700">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        taskName: String,
        isActive: Boolean,
        donePerc: Number,
        doneSteps: Number
    },
    methods: {
        cancelClicked() {
            this.$emit('cancelClicked');
        }
    },
    computed: {
    }
}
</script>

<template>
    <div class="absolute inset-0 z-30 bg-black/20 flex items-center justify-center" v-if="msg">
        <div class="w-full max-w-md shadow-lg rounded-lg p-4 bg-white leading-8">
            <div class="flex items-center justify-between pb-4 border-b border-b-gray-200">
                <h3 class="text-2xl text-gray-800 font-bold flex items-center">
                    <span class="material-icons mr-2">error_outline</span>Alert message
                </h3>
            </div>
            <div class="mt-6 text-right">
                <p class="mb-6 text-base font-bold text-gray-700 text-left">{{msg}}</p>
                <button @click="okClicked" class="rounded-md shadow hover:shadow-md capitalize font-bold text-base py-2 px-4 bg-amber-300 text-yellow-900">
                    <span class="material-icons align-middle">done_outline</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            msg: ''
        }
    },
    methods: {
        okClicked() {
            this.msg = '';
        },
        show(msg) {
            this.msg = msg;
        }
    }
}
</script>

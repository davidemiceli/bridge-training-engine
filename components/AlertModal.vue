<template>
    <div class="modal" v-bind:class="[msg ? 'is-active' : '']">
        <div class="modal-background"></div>
        <div class="modal-content">

            <article class="message message is-warning">
                <div class="message-header">
                    <p class="is-align-items-center is-flex">
                        <span class="material-icons mr-3">error_outline</span>
                        <span>Alert message</span>
                    </p>
                </div>
                <div class="message-body is-size-5">
                    <div class="has-text-dark">{{msg}}</div>
                    <div class="has-text-right">
                        <button class="button is-large light-shadow is-warning" @click="okClicked">
                            <span class="material-icons">done_outline</span>
                        </button>
                    </div>
                </div>
            </article>

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
    },
    computed: {
    }
}
</script>

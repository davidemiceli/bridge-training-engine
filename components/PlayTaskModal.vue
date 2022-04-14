<template>

    <div class="modal" v-bind:class="[isActive ? 'is-active' : '']">
        <div class="modal-background"></div>
        <div class="modal-card">

            <header class="modal-card-head">
                <p class="modal-card-title icon-text">
                    <span class="icon material-icons">settings_suggest</span>
                    <span>{{taskName}} is running...</span>
                </p>
            </header>

            <section class="modal-card-body is-size-5">
                <p>A total of {{doneSteps}} steps have currently been performed until now.</p>

                <div class="is-flex is-align-items-center mt-5">
                    <progress class="progress is-small is-success m-0" :value=donePerc max="100">{{donePerc}}%</progress>
                    <div class="ml-3 is-size-7 is-italic has-text-weight-bold">{{donePerc}}%</div>
                </div>
            </section>

            <footer class="modal-card-foot">
                <button class="button is-medium" @click="cancelClicked">Cancel</button>
            </footer>

        </div>
    </div>

</template>

<script>
import GameHelpers from '@/libs/gameHelpers';


export default {
    props: {
        taskName: String,
        isActive: Boolean,
        donePerc: Number,
        doneSteps: Number
    },
    methods: {
        cancelClicked() {
            this.isActive = false;
            this.$emit('cancelClicked');
        }
    },
    computed: {
    }
}
</script>

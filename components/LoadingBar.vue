<template>
    <div v-if="loading" class="loading-page loading-transition">
        <div class="dot-spin"></div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    data: () => ({
        loading: false
    }),
    methods: {
        start() {
            this.loading = true
        },
        finish() {
            this.loading = false
        }
    }
});
</script>

<style scoped>
.loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.6);
    text-align: center;
    /* padding-top: 200px; */
    font-size: 30px;
    font-family: sans-serif;
    z-index: 9999;
}

.loading-transition {
  transition: ease-in 2s;
}

.dot-spin {
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  left: 50%;
  top: 50%;
  background-color: transparent;
  color: transparent;
  box-shadow: 0 -18px 0 0 #5d96d8, 12.72984px -12.72984px 0 0 #5d96d8, 18px 0 0 0 #5d96d8, 12.72984px 12.72984px 0 0 rgba(152, 128, 255, 0), 0 18px 0 0 rgba(152, 128, 255, 0), -12.72984px 12.72984px 0 0 rgba(152, 128, 255, 0), -18px 0 0 0 rgba(152, 128, 255, 0), -12.72984px -12.72984px 0 0 rgba(152, 128, 255, 0);
  animation: dotSpin 1.5s infinite linear;
}

@keyframes dotSpin {
  0%,
  100% {
    box-shadow: 0 -18px 0 0 #5d96d8, 12.72984px -12.72984px 0 0 #5d96d8, 18px 0 0 0 #5d96d8, 12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 -5px rgba(152, 128, 255, 0), -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), -18px 0 0 -5px rgba(152, 128, 255, 0), -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
  }
  12.5% {
    box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0), 12.72984px -12.72984px 0 0 #5d96d8, 18px 0 0 0 #5d96d8, 12.72984px 12.72984px 0 0 #5d96d8, 0 18px 0 -5px rgba(152, 128, 255, 0), -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), -18px 0 0 -5px rgba(152, 128, 255, 0), -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
  }
  25% {
    box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0), 12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 0 #5d96d8, 12.72984px 12.72984px 0 0 #5d96d8, 0 18px 0 0 #5d96d8, -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), -18px 0 0 -5px rgba(152, 128, 255, 0), -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
  }
  37.5% {
    box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0), 12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 -5px rgba(152, 128, 255, 0), 12.72984px 12.72984px 0 0 #5d96d8, 0 18px 0 0 #5d96d8, -12.72984px 12.72984px 0 0 #5d96d8, -18px 0 0 -5px rgba(152, 128, 255, 0), -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
  }
  50% {
    box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0), 12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 -5px rgba(152, 128, 255, 0), 12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 0 #5d96d8, -12.72984px 12.72984px 0 0 #5d96d8, -18px 0 0 0 #5d96d8, -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
  }
  62.5% {
    box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0), 12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 -5px rgba(152, 128, 255, 0), 12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 -5px rgba(152, 128, 255, 0), -12.72984px 12.72984px 0 0 #5d96d8, -18px 0 0 0 #5d96d8, -12.72984px -12.72984px 0 0 #5d96d8;
  }
  75% {
    box-shadow: 0 -18px 0 0 #5d96d8, 12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 -5px rgba(152, 128, 255, 0), 12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 -5px rgba(152, 128, 255, 0), -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), -18px 0 0 0 #5d96d8, -12.72984px -12.72984px 0 0 #5d96d8;
  }
  87.5% {
    box-shadow: 0 -18px 0 0 #5d96d8, 12.72984px -12.72984px 0 0 #5d96d8, 18px 0 0 -5px rgba(152, 128, 255, 0), 12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 -5px rgba(152, 128, 255, 0), -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), -18px 0 0 -5px rgba(152, 128, 255, 0), -12.72984px -12.72984px 0 0 #5d96d8;
  }
}

</style>
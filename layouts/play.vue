<template>
    <div class="flex flex-col h-screen">
        <Navbar class="is-fixed-top bg-light-white navbar-border" :withMenu='true' />
        <Nuxt class="mb-auto mt-8 font-play" />
        <Footer />
    </div>
</template>

<script>

export default {
  loading: {
    color: 'blue'
  },
  head() {
    return {
      meta: [
        { hid: 'viewport', name: 'viewport', content: 'width=900,initial-scale=0' }
      ]
    }
  }
}
</script>

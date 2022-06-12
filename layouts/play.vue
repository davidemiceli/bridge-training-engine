<template>
    <div class="flex flex-col h-screen">
        <Navbar class="sticky top-0 z-50" :withMenu='true' />
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
        { hid: 'viewport', name: 'viewport', content: 'width=1024' }
      ]
    }
  }
}
</script>

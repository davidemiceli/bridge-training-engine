<template>
    <div class="flex flex-col h-screen">
        <Navbar :withMenu='true' />
        <Nuxt class="mb-auto mt-8 font-display" />
        <Footer />
    </div>
</template>

<script>

export default {
  loading: {
    color: 'blue'
  },
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap' }
    ]
  }
}
</script>

<style>
</style>

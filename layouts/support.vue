<template>
    <div class="container">
        <TheNavbar class="is-fixed-top bg-light-white navbar-border" :withMenu='true' />
        <Nuxt class="content-font m-t-70" />
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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap' }
    ]
  }
}
</script>

<style>
</style>

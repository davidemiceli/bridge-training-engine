<template>
    <div class="container">
        <TheNavbar class="landing-font" :withMenu='false' />
        <Nuxt />
        <Footer />
    </div>
</template>

<script>

export default {
  loading: {
    color: 'blue'
  }
}
</script>

<style>
</style>

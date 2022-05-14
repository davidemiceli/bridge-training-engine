<template>
    <div class="container">
        <TheNavbar :withMenu='false' />
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

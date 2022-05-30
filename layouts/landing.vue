<template>
    <div class="flex flex-col h-screen">
        <TheNavbar class="sticky top-0 z-50" :withMenu='false' />
        <Nuxt class="mb-auto" />
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

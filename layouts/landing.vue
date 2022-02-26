<template>
    <div class="container">
        <div class="navbar-brand">
            <NuxtLink to="/" class="navbar-item">
                <img src="logo.png" height="14"><!-- perfect height 28px -->
            </NuxtLink>
        </div>
        <Nuxt class="mt-5" />
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

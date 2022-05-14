<template>
    <div class="container">
        <TheNavbar class="is-fixed-top bg-light-white navbar-border" :withMenu='true' />
        <Nuxt class="m-t-70" />
    </div>
</template>

<script>

export default {
  loading: {
    color: 'blue'
  }
}
</script>

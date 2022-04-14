<template>
  <div class="container">
      <TheNavbar class="landing-font" :withMenu='false' />
      <div class="landing-font has-text-centered">
          <div class="mt-6">
              <span class="is-size-1 material-icons-outlined has-text-warning-dark" v-if="error.statusCode === 404">error_outline</span>
              <span class="is-size-1 material-icons-outlined has-text-danger-dark" v-else>report</span>
          </div>
          <h1 class="title is-1 mt-2">Error {{error.statusCode}}</h1>
          <p v-if="error.statusCode === 404" class="title is-2">Page not found</p>
          <p v-else class="title is-2">Sorry, an error occurred</p>
          <NuxtLink to="/" class="mt-6 button is-light has-text-weight-bold">Come back to Home</NuxtLink>
      </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error' // you can set a custom layout for the error page
}
</script>

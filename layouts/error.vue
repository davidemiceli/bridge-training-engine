<template>
  <div class="flex flex-col h-screen">
      <TheNavbar :withMenu='false' />
      <div class="container mx-auto font-mono text-center mb-auto">
          <div class="mt-6">
              <span class="text-6xl material-icons-outlined text-amber-600" v-if="error.statusCode === 404">error_outline</span>
              <span class="text-6xl material-icons-outlined text-red-600" v-else>report</span>
          </div>
          <div class="space-y-8">
            <h1 class="text-5xl mt-2">Error {{error.statusCode}}</h1>
            <p v-if="error.statusCode === 404" class="text-4xl">Page not found</p>
            <p v-else class="text-4xl">Sorry, an error occurred</p>
            <p class="mt-6">
              <NuxtLink to="/" class="rounded shadow hover:shadow-md bg-gray-100 text-gray-700 font-bold text-lg py-3 px-6 lg:text-xl">Come back to Home</NuxtLink>
            </p>
          </div>
      </div>
      <Footer />
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error' // you can set a custom layout for the error page
}
</script>

<template>
    <div class="flex flex-col h-screen">
        <Navbar class="sticky top-0 z-50" :withMenu='false' />
        <div class="mb-auto">
            <slot />
        </div>
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

<template>
    <div class="flex flex-col h-screen">
        <Navbar class="sticky top-0 z-50" :withMenu='true' />
        <div class="mb-auto mt-8 font-display">
            <slot />
        </div>
        <Footer />
    </div>
</template>

<script setup>
useHead({
    link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap' }
    ]
});
</script>

<style>
</style>

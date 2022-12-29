<template>
    <div class="flex flex-col h-screen">
        <Navbar class="sticky top-0 z-50" :withMenu='true' />
        <div class="mb-auto mt-8 font-play">
            <slot />
        </div>
        <Footer />
    </div>
</template>

<script setup>
useHead({
    meta: [
        { hid: 'viewport', name: 'viewport', content: 'width=1024' }
    ]
});
</script>

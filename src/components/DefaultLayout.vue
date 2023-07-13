<script setup>
    import SiteHeader from './SiteHeader.vue'
</script>

<template>
    <div class="body w-full h-screen bg-[#1e293b]">
        <SiteHeader/>
        <main>
            <router-view/>
        </main>
    </div>
</template>

<style>* {
    @apply font-sans;
}</style>
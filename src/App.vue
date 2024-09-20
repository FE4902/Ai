<script setup>
import Navbar from "./components/Navbar.vue";
import SearchBar from "./components/SearchBar.vue";
</script>

<template>
    <div>
        <Navbar />
        <SearchBar />
        <font-awesome-icon :icon="['fas', 'location-dot']" />
    </div>
</template>

<style scoped lang="scss"></style>

<script setup>
import Navbar from "./components/Navbar.vue";
import MainComp from "./components/MainComp.vue";
</script>

<template>
    <div>
        <Navbar />
        <MainComp />
        <font-awesome-icon :icon="['fas', 'location-dot']" />
    </div>
</template>

<style scoped lang="scss"></style>

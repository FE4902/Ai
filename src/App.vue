<script setup>
import Navbar from "./components/Navbar.vue";
import data from "./assets/portfolio";
</script>

<template>
    <div>
        <Navbar />
        <router-view :data="data" />
    </div>
</template>

<style lang="scss" scoped></style>

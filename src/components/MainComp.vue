<template>
    <div class="container">
        <Searchbar />
        <WeatherInfo />
    </div>
</template>

<script setup>
import Searchbar from "./Searchbar.vue";
import WeatherInfo from "./WeatherInfo.vue";
</script>

<style lang="scss" scoped>
.container {
    padding: 1em;
}
</style>

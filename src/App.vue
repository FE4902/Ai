<script setup>
import Navbar from "./components/Navbar.vue";
import MainComp from "./components/MainComp.vue";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(() => {
    store.dispatch("getWeather");
});

const onSearchCity = (city) => {
    weatherData.value.city = city;

    getWeather();
};
</script>

<template>
    <button @click="$store.dispatch('getWeather')">getWeather</button>
    <div>
        <Navbar />
        <MainComp />
    </div>
</template>

<style scoped lang="scss"></style>

<script setup>
import Navbar from "./components/Navbar.vue";
import MainComp from "./components/MainComp.vue";
import About from "./components/About.vue";

import { onMounted } from "vue";
import { useStore } from "./store/store";
import { storeToRefs } from "pinia";

const store = useStore();
const { toggle } = storeToRefs(store);

onMounted(() => {
    store.getWeather();
});
</script>

<template>
    <Navbar />
    <div v-if="!toggle">
        <MainComp />
    </div>
    <div v-else>
        <About />
    </div>
</template>

<style scoped lang="scss"></style>

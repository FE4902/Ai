<script setup>
import Navbar from "./components/Navbar.vue";
import MainComp from "./components/MainComp.vue";

import { ref, onMounted } from "vue";

const weatherData = ref({
    icon: "icon",
    temp: 0,
    text: "text",
    location: "location",
    city: "Seoul",
});

onMounted(() => {
    console.log("mounted");
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${
        weatherData.value.city
    }&appid=${import.meta.env.VITE_API_KEY}`;
    fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
            weatherData.value.icon = data.weather[0].icon;
            weatherData.value.temp = data.main.temp;
            weatherData.value.text = data.weather[0].description;
            weatherData.value.location = data.sys.country;
            weatherData.value.city = data.name;
            console.log(weatherData.value);
        });
});
</script>

<template>
    <div>
        <Navbar />
        <MainComp :weatherData="weatherData" />
    </div>
</template>

<style scoped lang="scss"></style>

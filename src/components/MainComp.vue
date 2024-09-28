<template>
    <div class="container">
        <Searchbar @onSearchCity="onSearchCity" />
        <WeatherInfo :weatherData="props.weatherData" />
    </div>
</template>

<script setup>
import Searchbar from "./Searchbar.vue";
import WeatherInfo from "./WeatherInfo.vue";

const emits = defineEmits(["onSearchCity"]);

const props = defineProps({
    weatherData: Object,
});

const onSearchCity = (city) => {
    console.log(city);

    emits("onSearchCity", city);
};
</script>

<style lang="scss" scoped>
.container {
    padding: 1em;
}
</style>

<script setup>
import { ref, onMounted, watch } from "vue";
import ChildComponent from "./components/ChildComponent.vue";

let count = ref(0);
let title = "Hello Vue";
let color = ref("green");

onMounted(() => {
    console.log("mounted");
});

const increaseCount = () => {
    count.value++;
};

watch(color, () => {
    console.log("color 변경");
});
</script>

<template>
    <div>
        <h1>{{ title }}</h1>
        <button @click="increaseCount">count++</button>
        <p>{{ count }}</p>
        <ChildComponent :color="color" bgColor="yellow" />
        <button @click="color = 'red'">change color</button>
    </div>
</template>

<style scoped></style>

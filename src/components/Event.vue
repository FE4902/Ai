<template>
    <div class="event">{{ text }}</div>
</template>

<script>
export default {
    name: "EventComponent",
    props: {
        text: String,
    },
};
</script>

<style>
.event {
    padding: 8px;
    color: #f5f5f5;
    background-color: #666;
    text-align: center;
}
</style>

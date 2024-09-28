<template>
    <nav class="navbar">
        <button class="toggle" @click="$store.commit('toggleButton')">
            <font-awesome-icon class="icon" :icon="['fas', 'bars-staggered']" />
        </button>
    </nav>
</template>

<script setup></script>

<style lang="scss" scoped>
.navbar {
    display: flex;
    justify-content: end;
    width: 100%;
    padding: 20px;
    background: #fff;

    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }
    .icon {
        color: #333;
        font-size: 24px;
    }
}
</style>

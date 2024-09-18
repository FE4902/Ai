<template>
    <section id="portfolio" class="container">
        <h1>Portfolio</h1>
        <ul class="list row">
            <li class="col-md-4" v-for="value in data" :key="value.id">
                <img :src="value.imgUrl" alt="" />
                <h3>{{ value.title }}</h3>
                <p>{{ value.desc }}</p>
            </li>
            <li></li>
        </ul>
    </section>
</template>

<script setup>
import data from "../assets/portfolio";
</script>

<style lang="scss" scoped>
#portfolio {
    h1 {
        margin-bottom: 1rem;
    }
    .list {
        list-style-type: none;
        padding: 0;

        li {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-bottom: 10vh;

            img {
                width: 100%;
                aspect-ratio: 16 / 9;
                object-fit: cover;
                object-position: top;
            }
            h4 {
                margin-top: 1rem;
            }
        }
    }
}
</style>

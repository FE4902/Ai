<template>
    <div>
        <Navbar />
        <h1>영화 정보</h1>
        <div class="item" v-for="(data, i) in datas" :key="data.id">
            <figure>
                <img :src="`${data.imgUrl}`" :alt="data.title" />
            </figure>
            <div class="info">
                <h3 class="bg-yellow">{{ data.title }}</h3>
                <p>개봉: {{ data.year }}</p>
                <p>장르: {{ data.category }}</p>
                <button @click="increaseLike(i)">좋아요</button>
                <span>{{ data.like }}</span>
                <p>
                    <button
                        @click="
                            isModal = true;
                            selectedMovie = i;
                        "
                    >
                        상세보기
                    </button>
                </p>
            </div>
        </div>
        <Modal />
    </div>
</template>

<script>
import datas from "./assets/movies";
import Navbar from "./components/Navbar.vue";
import Modal from "./components/Modal.vue";

export default {
    name: "App",
    data() {
        return {
            isModal: false,
            datas: datas,
            selectedMovie: 0,
        };
    },
    methods: {
        increaseLike(i) {
            this.datas[i].like += 1;
        },
    },
    components: {
        Navbar,
        Modal,
    },
};
</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
}

body {
    max-width: 768px;
    margin: 0 auto;
    padding: 20px;
}

h1,
h2,
h3 {
    margin-bottom: 1rem;
}

p {
    margin-bottom: 0.5rem;
}

button {
    margin-right: 10px;
    margin-top: 1rem;
}

.item {
    width: 100%;
    border: 1px solid #ccc;
    display: flex;
    margin-bottom: 20px;
    padding: 1rem;
}

.item figure {
    width: 30%;
    margin-right: 1rem;
}

.item img {
    width: 100%;
}

.item .info {
    width: 100%;
}
</style>

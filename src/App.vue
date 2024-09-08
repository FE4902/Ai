<template>
    <div>
        <Navbar />
        <SearchBar :datas="datas_temp" @searchMovie="searchMovie($event)" />
        <p><button @click="showAllMovie">전체보기</button></p>
        <Movies
            :datas="datas_temp"
            @openModal="
                isModal = true;
                selectedMovie = $event;
            "
            @increaseLike="increaseLike($event)"
        />
        <Modal
            :datas="datas"
            :isModal="isModal"
            :selectedMovie="selectedMovie"
            @closeModal="isModal = false"
        />
    </div>
</template>

<script>
import datas from "./assets/movies";
import Navbar from "./components/Navbar.vue";
import Movies from "./components/Movies.vue";
import Modal from "./components/Modal.vue";
import SearchBar from "./components/SearchBar.vue";

export default {
    name: "App",
    data() {
        return {
            isModal: false,
            datas: datas,
            datas_temp: [...datas],
            selectedMovie: 0,
        };
    },
    methods: {
        increaseLike(i) {
            this.datas[i].like += 1;
        },
        searchMovie(title) {
            this.datas_temp = this.datas.filter((movie) => {
                return movie.title.includes(title);
            });
        },
        showAllMovie() {
            this.datas_temp = [...this.datas];
        },
    },
    components: {
        Navbar,
        Movies,
        Modal,
        SearchBar,
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

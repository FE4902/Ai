<template>
    <div>
        <Navbar />
        <Event :text="text[eventTextNumber]" />
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
import Event from "./components/Event.vue";
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
            text: [
                "넷플릭스 강렬한 운명의 드라마, 경성크리쳐",
                "디즈니 100주년 기념작, 위시",
                "그날, 대한민국의 운명이 바뀌었다, 서울의 봄",
            ],
            eventTextNumber: 0,
        };
    },
    methods: {
        increaseLike(id) {
            // this.datas[i].like += 1;
            this.datas.find((movie) => {
                if (movie.id == id) {
                    movie.like += 1;
                }
            });
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
        Event,
        Movies,
        Modal,
        SearchBar,
    },
    mounted() {
        setInterval(() => {
            if (this.eventTextNumber == this.text.length - 1) {
                this.eventTextNumber = 0;
            } else {
                this.eventTextNumber += 1;
            }
        }, 3000);
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

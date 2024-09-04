<template>
    <div>
        <h1>영화 정보</h1>
        <div v-for="(data, i) in datas" :key="data.id">
            <h3 class="bg-yellow">{{ data.title }}</h3>
            <p>개봉: {{ data.year }}</p>
            <p>장르: {{ data.category }}</p>
            <button @click="increaseLike(i)">좋아요</button>
            <span>{{ data.like }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            datas: [
                {
                    title: "노량",
                    year: 2023,
                    category: "액션, 드라마",
                    like: 0,
                },
                {
                    title: "아쿠아맨과 로스트 킹덤",
                    year: 2023,
                    category: "액션, 판타지, 어드밴처",
                    like: 0,
                },
                {
                    title: "3일의 휴가",
                    year: "2023",
                    category: "판타지, 드라마",
                    like: 0,
                },
            ],
        };
    },
    methods: {
        increaseLike(i) {
            this.datas[i].like += 1;
        },
    },
};
</script>

<style>
.bg-yellow {
    background-color: gold;
    padding: 10px;
}
</style>

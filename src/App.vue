<template>
    <div>
        <h1>영화 정보</h1>
        <div v-for="data in datas" :key="data.id">
            <h3 class="bg-yellow" :style="data.textRed">{{ data.title }}</h3>
            <p>개봉: {{ data.year }}</p>
            <p>장르: {{ data.category }}</p>
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
                    textRed: "color: red",
                },
                {
                    title: "아쿠아맨과 로스트 킹덤",
                    year: 2023,
                    category: "액션, 판타지, 어드밴처",
                },
                {
                    title: "3일의 휴가",
                    year: "2023",
                    category: "판타지, 드라마",
                },
            ],
        };
    },
};
</script>

<style>
.bg-yellow {
    background-color: gold;
    padding: 10px;
}
</style>

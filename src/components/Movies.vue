<template>
    <div class="container">
        <h1>영화 정보</h1>
        <div class="item" v-for="(data, i) in datas" :key="data.id">
            <figure>
                <img :src="`${data.imgUrl}`" :alt="data.title" />
            </figure>
            <div class="info">
                <h3 class="bg-yellow">{{ data.title }}</h3>
                <p>개봉: {{ data.year }}</p>
                <p>장르: {{ data.category }}</p>
                <button @click="$emit('increaseLike', i)">좋아요</button>
                <span>{{ data.like }}</span>
                <p>
                    <button @click="$emit('openModal', i)">상세보기</button>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MoviesComponent",
    props: {
        datas: Array,
    },
};
</script>

<style>
.container {
    padding: 20px;
}
</style>

<template>
    <div>
        <div class="search-box">
            <input
                type="search"
                placeholder="검색어 입력"
                @change="
                    $emit('searchMovie', $event.target.value);
                    inputText = $event.target.value;
                    $event.target.value = '';
                "
            />
            <button>검색</button>
        </div>
        <p>{{ inputText }}</p>
    </div>
</template>

<script>
export default {
    name: "SearchBarComponent",
    data() {
        return {
            inputText: "",
        };
    },
    props: {
        datas: Array,
    },
    watch: {
        inputText(name) {
            const findName = this.datas.filter((movie) => {
                return movie.title.includes(name);
            });

            if (findName.length == 0) {
                alert("해당하는 자료가 없습니다.");
            }
        },
    },
};
</script>

<style>
.search-box {
    display: flex;
    justify-content: center;
    padding: 10px;
}

.search-box input {
    padding: 5px 10px;
}

.search-box button {
    margin: 0;
}
</style>

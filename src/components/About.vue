<template>
    <section id="about" class="container">
        <h1>About</h1>
        <div class="row gx-5">
            <figure class="col-md-6">
                <img src="../assets/images/profile.jpg" alt="profile" />
                <figcaption>About Michael Kwon</figcaption>
            </figure>
            <p class="col-md-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem quisquam praesentium aliquid omnis rerum ea
                architecto, animi fugit dolor temporibus ut totam commodi eum
                ipsum atque dolorum quaerat quas. Ad.
            </p>
        </div>
        <article class="row mt-5">
            <h2>Skills</h2>
            <dl>
                <template v-for="skill in skills" :key="skill.id">
                    <dt class="lead">{{ skill.name }}</dt>
                    <dd>
                        <div class="progress" role="progressbar">
                            <div
                                class="progress-bar"
                                :style="{ width: skill.point }"
                            ></div>
                        </div>
                    </dd>
                </template>
            </dl>
        </article>
    </section>
</template>

<script setup>
const skills = [
    { name: "HTML", point: "100%" },
    { name: "CSS", point: "75%" },
    { name: "JavaScript", point: "50%" },
    { name: "Vue", point: "25%" },
];
</script>

<style lang="scss" scoped>
figure {
    img {
        width: 100%;
    }
}
</style>

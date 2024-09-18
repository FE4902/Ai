import { createWebHistory, createRouter } from "vue-router";
import TitlePage from "../components/TitlePage.vue";
import Portfolio from "../components/Portfolio.vue";
import About from "../components/About.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: TitlePage },
        { path: "/portfolio", component: Portfolio },
        { path: "/about", component: About },
    ],
});

export default router;

import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
    faBarsStaggered,
    faLocationDot,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

library.add(faBarsStaggered, faLocationDot, faMagnifyingGlass);

const pinia = createPinia();

createApp(App)
    .use(pinia)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app");

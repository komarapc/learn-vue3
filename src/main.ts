import "./style.css";

import App from "./App.vue";
import { createApp } from "vue";
import { createHead } from "@unhead/vue";
import { createPinia } from "pinia";
import router from "./route";

const pinia = createPinia();
const head = createHead();
createApp(App).use(router).use(pinia).use(head).mount("#app");

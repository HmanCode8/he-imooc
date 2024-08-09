import { createApp } from "vue";
import { createPinia } from "pinia";
import resizeOb from "@/directives/resize-ob";
import "./style.css";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);
app.directive("resize-ob", resizeOb);

app.use(pinia).mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueParticles from "vue-particles";
// import "./index.css";
createApp(App).use(store).use(router).use(VueParticles).mount("#app");

import { createApp } from "vue"; // wenn kein ./ (kein pfad angegeben) kommt es vom node_modules folder
import App from "./App.vue";
import router from "./router";
//import LayoutHeader from "@/components/LayoutHeader";
//import "@/assets/global.css"; //<- kann auch genutzt werden,
// statt in der app.vue im style zu importieren
// (personal preference)

createApp(App).use(router).mount("#app");

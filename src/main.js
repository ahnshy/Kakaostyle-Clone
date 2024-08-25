import { createApp } from 'vue'
import App from './App.vue'
import mapperRouter from "@/route/index.js";

createApp(App).use(mapperRouter).mount('#app')
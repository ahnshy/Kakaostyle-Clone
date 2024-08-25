import { createWebHistory, createRouter } from "vue-router";
import ContentsView from "@/components/layout/ContentsView.vue";
import TheWelcome from "@/components/contents/TheWelcome.vue";

const routes = [
    {
        path: "/",
        component: ContentsView,
    },
    {
        path: "/welcome",
        component: TheWelcome,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

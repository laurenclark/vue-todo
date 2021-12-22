import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";

const routes = [
    {
        path: "/todos",
        name: "Todos",
        // route level code-splitting
        component: () => import("../views/Todos.vue")
    },
    {
        path: "/",
        name: "Login",
        component: Login
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;

import HomePage from "./components/HomePage.vue";
import LouginPage from "./components/LouginPage.vue";
import SingUpForm from "./components/SingUpForm.vue";
import { createRouter, createWebHistory } from "vue-router";



const routes=[
    {
        path: "/",
        name: "home",
        component: HomePage,
        },
        {
            path: "/singup",
            name: "singup",
            component: SingUpForm,
        },
        {
            path: "/login",
            name: "login",
            component: LouginPage,
        }

];
const router = createRouter({
    history: createWebHistory(),
    routes
    });

    
    export default router;

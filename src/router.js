import AddRestrant from "./components/AddRestrant.vue";
import HomePage from "./components/HomePage.vue";
import LouginPage from "./components/LouginPage.vue";
import SingUpForm from "./components/SingUpForm.vue";
import { createRouter, createWebHistory } from "vue-router";
import UpdateRestrant from "./components/UpdateRestrant.vue";



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
        },
        {
            path: "/addrest",
            name: "AddRestrant",
            component: AddRestrant,
        },
        {
            path: "/updaterest/:id",
            name: "UpdateRestrant",
            component:UpdateRestrant,
        }

];
const router = createRouter({
    history: createWebHistory(),
    routes
    });

    
    export default router;

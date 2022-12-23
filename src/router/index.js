import {createRouter, createWebHistory} from "vue-router";
import LoginPage from "@/pages/LoginPage";
import TodoAppPage from "@/pages/TodoAppPage";

const routes = [
    {
        path: "/",
        name: "App",
        component: TodoAppPage,
        beforeEnter(to, from, next) {
            next()
        }
    },
    {
        path: "/login",
        name: "login",
        component: LoginPage,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.name !== 'login') {
        if (window.isLogin) {
            next();
        } else {
            alert('请先登录')
            next('/login')
        }
    }
    next();
})

export default router
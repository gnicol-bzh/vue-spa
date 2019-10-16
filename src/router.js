import Category from './theme/Category.vue'
import Login from './theme/Login.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Category,
        },
        {
            path: '/login',
            component: Login,
        },
    ],
})

export default router

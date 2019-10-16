import Category from './theme/Category.vue'
import Login from './theme/Login.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'is-active',
    routes: [
        {
            path: '/',
            redirect: '/category/front-end',
        },
        {
            path: '/category/:id',
            component: Category,
        },
        {
            path: '/login',
            component: Login,
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        return { y: 0 }
    },
})

export default router

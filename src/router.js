import Category from './theme/Category.vue'
import Login from './theme/Login.vue'
import NotFound from './theme/NotFound.vue'
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
            component: Category,
            name: 'category',
            path: '/category/:id',
        },
        {
            component: Login,
            path: '/login',
        },
        {
            component: NotFound,
            path: '*',
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        return { y: 0 }
    },
})

export default router

import Category from './theme/Category.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [{
        path: '/', component: Category,
    }],
})

export default router

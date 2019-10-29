import AppLayout from './theme/Layout.vue'
import Vue from 'vue'
import router from './router'
import store from './vuex/index'

const app = new Vue({
    router,
    ...AppLayout,
    store,
})

export { app, router, store }

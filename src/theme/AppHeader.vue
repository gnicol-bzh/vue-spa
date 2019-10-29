<template>
    <nav
        class="navbar is-fixed-top is-primary"
        role="navigation"
        aria-label="main navigation"
    >
        <div class="navbar-brand">
            <router-link
                class="navbar-item"
                to="/"
                exact
            >
                <img
                    src="http://bit.ly/vue-img"
                    alt="Vue SPA"
                >
            </router-link>
            <a
                role="button"
                class="navbar-burger burger"
                :class="{ 'is-active': isActive }"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                @click="toggleBurger"
            >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
            </a>
        </div>
        <div
            class="navbar-menu"
            :class="{ 'is-active': isActive }"
        >
            <div class="navbar-start">
                <router-link
                    class="navbar-item"
                    to="/category/front-end"
                >
                    Front-end
                </router-link>
                <router-link
                    class="navbar-item"
                    :to="{ name:'category', params: { id: 'mobile' } }"
                >
                    Mobile
                </router-link>
            </div>
            <div class="navbar-end">
                <router-link
                    class="navbar-item"
                    to="/login"
                >
                    <span v-if="isAuthenticated">Logout</span>
                    <span v-else>Login</span>
                </router-link>
            </div>
        </div>
    </nav>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            isActive: false,
        }
    },
    computed: {
        ...mapGetters(['isAuthenticated']),
    },
    methods: {
        toggleBurger() {
            this.isActive = !this.isActive
        },
    },
}
</script>

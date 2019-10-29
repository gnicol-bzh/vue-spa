<template>
    <div class="content">
        <div v-if="isAuthenticated">
            <p>Hello authenticated user</p>
            <p>
                <button
                    class="button is-primary"
                    @click="logout()"
                >
                    Logout
                </button>
            </p>
        </div>
        <div v-else>
            <h2>Login</h2>
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Username</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <input
                                v-model="username"
                                class="input"
                                type="text"
                                placeholder="Your username"
                            >
                        </div>
                    </div>
                </div>
            </div>
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Password</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <input
                                v-model="password"
                                class="input"
                                type="password"
                                placeholder="Your password"
                            >
                        </div>
                    </div>
                </div>
            </div>
            <div class="field is-horizontal">
                <div class="field-label">
                <!-- Left empty for spacing -->
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <button
                                class="button is-primary"
                                @click="login()"
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data() {
        return {
            password: '',
            username: '',
            // isAuthenticated: false,
        }
    },
    computed: {
        ...mapGetters(['isAuthenticated']),
    },
    methods: {
        ...mapActions({ logout: 'logout' }),
        login() {
            this.$store.dispatch('login', {
                    password: this.password,
                    username: this.username,
                }).then(() => {
                    this.password = ''
                    this.username = ''
                })
        },
    },
}
</script>

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
        <form v-else>
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
        </form>
    </div>
</template>
<script>
import appService from '../app.service'
export default {
    data() {
        return {
            password: '',
            username: '',
            isAuthenticated: false,
        }
    },
    created() {
        const expiration = window.localStorage.getItem('tokenExpiration')
        var unixTimestamp = new Date().getTime() / 1000
        if (expiration !== null && parseInt(expiration) - unixTimestamp > 0) {
            this.isAuthenticated = true
        }
    },
    methods: {
        login() {
            appService
                .login({
                    password: this.password,
                    username: this.username,
                })
                .then(data => {
                    window.localStorage.setItem('token', data.token)
                    window.localStorage.setItem(
                        'tokenExpiration',
                        data.expiration
                    )
                    this.isAuthenticated = true
                    this.password = ''
                    this.username = ''
                })
                .catch(() => window.alert('Could not login!'))
        },
        logout() {
            window.localStorage.setItem('token', null)
            window.localStorage.setItem(
                'tokenExpiration',
                null
            )
            this.isAuthenticated = false
        },
    },
}
</script>

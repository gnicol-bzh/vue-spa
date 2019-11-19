<template>
    <div class="columns">
        <div
            v-for="post in posts"
            :key="post.id"
            class="column is-one-third"
        >
            <app-post :link="post.rest_api_enabler.Link">
                <h3
                    slot="title"
                    v-html="post.title.rendered"
                />
                <div
                    slot="content"
                    v-html="post.excerpt.rendered"
                />
            </app-post>
        </div>
    </div>
</template>
<script>
import Post from './Post.vue'
import { mapGetters } from 'vuex'

const fetchInitialData = (store, route) => {
    let categoryId = 2

    if (route.params.id === 'mobile') {
        categoryId = 11
    }

    return store.dispatch('postsModule/updateCategory', categoryId)
}

export default {
    components: {
        'app-post': Post,
    },
    computed: {
        ...mapGetters('postsModule', ['posts']),
    },
    watch: {
        '$route'(to, from) {
            this.loadPosts()
        },
    },
    asyncData(store, route) {
        return fetchInitialData(store, route)
    },
    created() {
        this.loadPosts()
    },
    methods: {
        loadPosts() {
            fetchInitialData(this.$store, this.$route)
        },
    },
}
</script>

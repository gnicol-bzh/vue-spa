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
import appService from '../app.service'

export default {
    components: {
        'app-post': Post,
    },
    data() {
        return {
            id: this.$route.params.id,
            posts: [],
        }
    },
    watch: {
        '$route'(to, from) {
            this.id = to.params.id
            this.loadPosts()
        },
    },
    created() {
        this.loadPosts()
    },
    methods: {
        loadPosts() {
            let categoryId = 2
            if (this.id === 'mobile') {
                categoryId = 11
            }
            appService.getPosts(categoryId).then(data => {
                this.posts = data
            })
        },
    },
}
</script>

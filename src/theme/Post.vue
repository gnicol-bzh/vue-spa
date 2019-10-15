<template>
    <article class="card">
        <div class="card-content">
            <h3>{{ post.title }}</h3>
            {{ post.content }}
        </div>
        <footer class="card-footer">
            <a
                :href="post.link"
                class="card-footer-item"
            >Read more</a>
        </footer>
    </article>
</template>
<script>
export default {
    props: ['post'],
}
</script>

<template>
    <article class="card">
        <div class="card-content">
            <slot name="title" />
            <slot name="content" />
        </div>
        <footer class="card-footer">
            <a
                :href="link"
                class="card-footer-item"
            >Read more</a>
        </footer>
    </article>
</template>
<script>
export default {
    props: {
        link: {
            type: String,
            default: '#',
        },
    },
}
</script>
<style scoped>
.card {
    height: 100%;
    padding-bottom: 40px;
}
footer {
    bottom: 0;
    left: 0;
    position: absolute;
    width: 100%;
}
</style>

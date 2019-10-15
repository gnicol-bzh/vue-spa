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

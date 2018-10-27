<template>
    <nav aria-label="...">
        <ul class="pagination mt-2">
            <li class="page-item" :class="{ 'disabled' : meta.current_page === 1 }">
                <a class="page-link" @click.prevent="switched(meta.current_page - 1)" href="#" tabindex="-1">Previous</a>
            </li>
            <li class="page-item" :class="{ 'active': meta.current_page === page }" v-for="page in meta.last_page">
                <a class="page-link" href="#" @click.prevent="switched(page)">{{ page }}</a>
            </li>
            <li class="page-item" :class="{ 'disabled': meta.current_page === meta.last_page }">
                <a class="page-link" @click.prevent="switched(meta.current_page + 1)" href="#">Next</a>
            </li>
        </ul>
    </nav>
</template>

<script>
  export default {
    name: "Pagination",
    props: ['meta'],
    methods: {
      switched(page) {
        if (page <= 0 || page > this.meta.last_page) {
            return
        }

        this.$emit('pagination:switched', page)
      }
    }
  }
</script>

<style scoped>

</style>

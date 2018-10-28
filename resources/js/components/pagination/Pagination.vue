<template>
    <nav aria-label="...">
        <ul class="pagination mt-2">
            <li class="page-item" :class="{ 'disabled' : meta.current_page === 1 }">
                <a class="page-link" @click.prevent="switched(meta.current_page - 1)" href="#"
                   tabindex="-1">Previous</a>
            </li>

            <template v-if="section > 1">
                <li class="page-item">
                    <a class="page-link" @click.prevent="switched(1)" href="#"
                       tabindex="-1">1</a>
                </li>

                <li class="page-item">
                    <a class="page-link" href="#"
                       tabindex="-1" @click.prevent="goBackASection">...</a>
                </li>
            </template>

            <li class="page-item" :class="{ 'active': meta.current_page === page }" v-for="page in pages">
                <a class="page-link" href="#" @click.prevent="switched(page)">{{ page }}</a>
            </li>

            <template v-if="section < sections">
                <li class="page-item">
                    <a class="page-link" href="#"
                       tabindex="-1" @click.prevent="goForwardASection">...</a>
                </li>

                <li class="page-item">
                    <a class="page-link" @click.prevent="switched(meta.last_page)" href="#"
                       tabindex="-1">{{ meta.last_page }}</a>
                </li>
            </template>

            <li class="page-item" :class="{ 'disabled': meta.current_page === meta.last_page }">
                <a class="page-link" @click.prevent="switched(meta.current_page + 1)" href="#">Next</a>
            </li>
        </ul>
        <p>sections: {{ sections }}</p>
        <p>section: {{ section }}</p>
        <p>last page: {{ lastPage }}</p>
    </nav>
</template>

<script>
  export default {
    name: "Pagination",
    props: ['meta'],
    data() {
      return {
        numbersPerSection: 7
      }
    },
    computed: {
      sections() {
        return Math.ceil(this.meta.last_page / this.numbersPerSection)
      },
      section() {
        return Math.ceil(this.meta.current_page / this.numbersPerSection)
      },
      pages() {
        return _.range(
          (this.section - 1) * this.numbersPerSection + 1,
          this.lastPage + 1
        );
      },
      lastPage() {
        let lastPage = (this.section - 1) * this.numbersPerSection + this.numbersPerSection

        if (this.section === this.sections) {
          lastPage = this.meta.last_page
        }

        return lastPage;
      }
    },
    methods: {
      switched(page) {
        if (page <= 0 || page > this.meta.last_page) {
          return
        }

        this.$emit('pagination:switched', page)
      },
      goBackASection() {
        this.switched(this.firstPageOfSection(this.section - 1))
      },
      goForwardASection() {
        this.switched(this.firstPageOfSection(this.section + 1))
      },
      firstPageOfSection(section) {
        return (section - 1) * this.numbersPerSection + 1
      }
    }
  }
</script>

<style scoped>

</style>

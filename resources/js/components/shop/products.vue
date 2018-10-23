<template>
    <div class="row mt-5">
        <product></product>
    </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: "products",
    methods: {
      ...mapActions({
          getProducts: 'getProducts'
      })
    },
    mounted() {
      this.getProducts()
    }
  }
</script>

<style scoped>

</style>

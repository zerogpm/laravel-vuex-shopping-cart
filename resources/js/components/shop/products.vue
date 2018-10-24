<template>
    <div class="row mt-5">
        <product v-for="product in products" :product="product" :key="product.id"></product>
    </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: "products",
    computed: {
      ...mapGetters({
          products: 'products'
      })
    },
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

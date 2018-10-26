<template>
    <div class="row mt-5">
        <product v-for="product in products" :product="product" :key="product.id"></product>
    </div>
</template>

<script>
  import product from './product'
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: "products",
    components: {
      product
    },
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

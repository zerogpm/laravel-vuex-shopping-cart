<template>
    <div class="col-lg-4 mb-4">
        <div class="card" style="width: 18rem;">
            <img
                class="card-img-top"
                :src="product.image"
                :alt="product.title"
            >
            <div class="card-body">
                <h5 class="card-title">{{ product.title }}</h5>
                <p class="card-text">{{ product.description }} $ {{ product.price }}</p>
                <a href="#" class="btn btn-primary" @click.prevent="addItemToCart">Add to Cart</a>
            </div>
        </div>
    </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: "product",
    props: ['product'],
    methods: {
      ...mapActions({
        addProductToCart : 'addProductToCart'
      }),
      addItemToCart() {
        this.addProductToCart(this.product)
      }
    }
  }
</script>

<style scoped>

</style>

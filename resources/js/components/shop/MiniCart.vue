<template>
    <div>
        <ul class="list-group" v-if="cart.length">
            <li class="list-group-item mt-5" v-for="item in cart">
                <div class="row">
                    <div class="col-lg-12">
                        {{ item.quantity }} X {{ item.product.title }} @ ${{ item.product.price }}
                    </div>
                    <div class="col-lg-12">
                        <span class="badge badge-primary badge-pill"><a href="#" class="links">Remove</a></span>
                    </div>
                </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span class="badge badge-primary badge-pill"><a href="#" class="links">Clear</a></span>
            </li>
            <li class="list-group-item list-group-item-primary">
                {{ cartCount }} item in cart ( ${{ cartTotalPrice }} )
            </li>
        </ul>
        <p v-else>No items in cart</p>
    </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: "MiniCart",
    methods: {
      ...mapActions({
        getCart: 'getCart'
      })
    },
    computed: {
      ...mapGetters({
        cart: 'cart',
        cartCount: 'cartCount',
        cartTotalPrice: 'cartTotalPrice'
      })
    },
    mounted() {
      this.getCart();
    }
  }
</script>

<style scoped>
    .links {
        text-decoration: none;
        color: white;
    }
</style>

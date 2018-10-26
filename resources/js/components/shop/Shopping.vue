<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-2">
                <app-mini-cart></app-mini-cart>
            </div>

            <div class="col-lg-10">
                <products></products>
            </div>
        </div>

        <hr>

        <sort></sort>
    </div>
</template>

<script>
  import sort from './Sort'
  import products from './products'
  import miniCart from './MiniCart'
  export default {
    name: "Shopping",
    components: {
      products,
      sort,
      appMiniCart: miniCart
    }
  }
</script>

<style scoped>

</style>

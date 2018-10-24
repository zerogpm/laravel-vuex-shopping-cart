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
                <a href="#" class="btn btn-primary">Add to Cart</a>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "product",
    props: ['product']
  }
</script>

<style scoped>

</style>

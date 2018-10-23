<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item mt-5">
                <div class="row">
                    <div class="col-lg-12">
                        1 X Some item @ $22.2
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
                x item in cart ( $22.3 )
            </li>
        </ul>
        <p>No items in cart</p>
    </div>
</template>

<script>
  export default {
    name: "MiniCart"
  }
</script>

<style scoped>
    .links {
        text-decoration: none;
        color: white;
    }
</style>

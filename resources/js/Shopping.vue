<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-2">
                <ul class="list-group">
                    <li class="list-group-item mt-2">
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
                </ul>
            </div>

            <div class="col-lg-10">
                <div class="row mt-2">
                    <div class="col-lg-4">
                        <div class="card" style="width: 18rem;">
                            <img
                                class="card-img-top"
                                src="https://via.placeholder.com/350x180C/O https://placeholder.com/"
                                alt="Card image cap"
                            >
                            <div class="card-body">
                                <h5 class="card-title">Product title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="card" style="width: 18rem;">
                            <img
                                class="card-img-top"
                                src="https://via.placeholder.com/350x180C/O https://placeholder.com/"
                                alt="Card image cap"
                            >
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="card" style="width: 18rem;">
                            <img
                                class="card-img-top"
                                src="https://via.placeholder.com/350x180C/O https://placeholder.com/"
                                alt="Card image cap"
                            >
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
  export default {
    name: "Shopping"
  }
</script>

<style scoped>
    .red {
        background-color: red;
    }

    .yellow {
        background-color: yellow;
    }

    .links {
        text-decoration: none;
        color: white;
    }

</style>

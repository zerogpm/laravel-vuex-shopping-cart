<template>
    <div class="row">
        <div class="col-lg-12 ">
            <form class="form-inline">
                <div class="form-group">
                    <input type="checkbox" class="form-check-input" id="price" @change="priceCheck">
                    <label class="form-check-label" for="price">Sort by price</label>
                </div>

                <div class="form-group mx-2">
                    <input type="checkbox" class="form-check-input" id="letter">
                    <label class="form-check-label" for="letter">Sort by letter</label>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    name: "Sort",
    data() {
      return {
        priceChecked: false
      }
    },
    methods: {
      ...mapMutations({
        sortByPrice: 'sortByPrice'
      }),
      priceCheck () {
        this.priceChecked = !this.priceChecked;
        if(this.priceChecked) {
            this.sortByPrice(this.priceChecked);
        } else {
            this.sortByPrice(this.priceChecked);
        }
      }
    }
  }
</script>

<style scoped>

</style>

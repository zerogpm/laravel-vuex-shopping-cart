<template>
    <div>
        <a href="#" @click.prevent="add" class="btn btn-outline-primary">Add random number</a>
    </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: "AddNumber",
    methods: {
      ...mapActions({
          fetchNumber : 'fetchNumber'
      }),
      add () {
        this.fetchNumber({
            min: 1,
            max: 100
        })
      }
    }
  }
</script>

<style scoped>
</style>

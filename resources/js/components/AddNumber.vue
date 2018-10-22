<template>
    <div>
        <a href="#" @click.prevent="add" class="btn btn-outline-primary">Add random number</a>
    </div>
</template>

<script>
  export default {
    name: "AddNumber",
    methods: {
      add () {
        this.$store.commit('addRandomNumber', {
            min: 1,
            max: 100
        })
      }
    }
  }
</script>

<style scoped>

</style>

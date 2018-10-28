<template>
    <div>
        <ul v-if="numbers.length">
            <li v-for="number in numbers">{{ number }}</li>
        </ul>
        <p v-else>Start adding number</p>
        <add-number></add-number>
    </div>
</template>

<script>
  import addNumber from './AddNumber'

  export default {
    name: "Number",
    components: {
      addNumber
    },
    computed: {
      numbers() {
        return this.$store.getters.numbers;
      }
    }
  }
</script>

<style scoped>

</style>

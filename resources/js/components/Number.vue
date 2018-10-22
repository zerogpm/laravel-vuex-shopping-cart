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
  export default {
    name: "Number",
    computed: {
        numbers() {
            return this.$store.getters.numbers;
        }
    }
  }
</script>

<style scoped>

</style>

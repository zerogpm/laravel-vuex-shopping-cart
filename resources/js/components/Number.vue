<template>
    <ul>
        <li v-for="number in numbers">{{ number }}</li>
    </ul>
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

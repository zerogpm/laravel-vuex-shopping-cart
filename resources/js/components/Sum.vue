<template>
    <div class="sum">
        <number></number>
        {{ sum }}
        <p>you have generated {{ randomNumberCount }} random numbers</p>
    </div>
</template>

<script>
    export default {
        name: "Sum",
        computed: {
            sum() {
                return this.$store.getters.sum;
            },
            randomNumberCount()
            {
                return this.$store.getters.randomNumberCount;
            }
        }
    }
</script>

<style scoped>

</style>

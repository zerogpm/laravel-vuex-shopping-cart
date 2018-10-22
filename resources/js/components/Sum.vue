<template>
    <div class="sum">
        <number></number>
        {{ sum }}
    </div>
</template>

<script>
    export default {
        name: "Sum",
        computed: {
            sum() {
                return this.$store.getters.sum;
            }
        }
    }
</script>

<style scoped>

</style>

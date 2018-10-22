<template>
    <div class="sum">
        <number></number>
        {{ sum }}
        <p>you have generated {{ randomNumberCount }} random numbers</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "Sum",
        computed: {
          ...mapGetters({
            sum: 'sum',
            randomNumberCount : 'randomNumberCount'
          })
        }
    }
</script>

<style scoped>

</style>

<template>
    <div class="sum">
        <number></number>
        {{ sum }}
        <p>you have generated {{ randomNumberCount }} random numbers</p>
    </div>
</template>

<script>
  import number from './Number'
  import {mapGetters} from 'vuex'

  export default {
    name: "Sum",
    components: {
      number
    },
    computed: {
      ...mapGetters({
        sum: 'sum',
        randomNumberCount: 'randomNumberCount'
      })
    }
  }
</script>

<style scoped>

</style>

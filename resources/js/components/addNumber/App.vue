<template>
    <div class="container-fluid">
        <div class="d-flex justify-content-center">
            <sum></sum>
        </div>
    </div>
</template>

<script>
    import sum from './Sum'
    export default {
        name: 'app',
        components: {
          sum
        }
    }
</script>

<style lang="scss" scoped>
</style>

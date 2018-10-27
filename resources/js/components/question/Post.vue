<template>
    <div>
        <div class="card mt-2">
            <div class="card-header">
                Featured
            </div>
            <div class="card-body">
                <h5 class="card-title">{{ question.title }}</h5>
                <p class="card-text">{{ question.body }}</p>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Post",
    props: ['question']
  }
</script>

<style scoped>

</style>

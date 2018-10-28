<template>
    <div class="container">
        <post v-for="question in questions" :question="question" :key="question.id"></post>
        <pagination :meta="meta" v-on:pagination:switched="getQuestions"></pagination>
    </div>
</template>

<script>
  import post from './Post'
  import Pagination from '../pagination/Pagination'

  export default {
    name: "question-post",
    data() {
      return {
        questions: [],
        meta: {}
      }
    },
    components: {
      post,
      Pagination
    },
    methods: {
      getQuestions(page = 1) {
        axios.get('/api/question', {
          params: {
            page
          }
        }).then((response) => {
          this.questions = response.data.data;
          this.meta = response.data.meta;
          console.log(this.meta);
        }).catch((error) => {
          console.log(error)
        })
      }
    },
    mounted() {
      this.getQuestions()
    }
  }
</script>

<style scoped>

</style>

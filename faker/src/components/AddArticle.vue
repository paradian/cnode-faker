<template>
  <div class="test">
    hello
    <Ueditor ueditorPath="../static/ueditor"></Ueditor>
  </div>
</template>

<script>
  import Ueditor from 'vue-ueditor'
    export default {
        name: "AddArticle",
      components: {
          Ueditor
      },

mounted:function () {
  console.log('hello world !')
}
    }
</script>

<style scoped>

</style>

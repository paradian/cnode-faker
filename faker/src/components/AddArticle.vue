<template>
  <div class="test">
      <select >
        <option value="dev">测试</option>
        <option value="ask">ask</option>
      </select><br>
    <input type="text" class="article-title" placeholder="字数要求10字以上" v-model="title">
    <Ueditor @ready="editorReady"></Ueditor>
    <button @click="postArticle">提交</button>
  </div>
</template>

<script>
  import axios from 'axios';
  import Ueditor from './Ueditor'
    export default {
        name: "AddArticle",
      data: function() {
          return {
            content:'',
            title:'',
            postpackage
          }
      },
      components: {
          Ueditor
      },
methods: {
          postArticle:  function () {
            console.log('get ');
            // console.log(this);

            this.postpackage={
              accesstoken: 'a071d5df-d1f5-42e5-8d51-afcdb09c328e',
              title:this.title,
              tab:'dev',
              content:this.content
            }
            console.log(this.postpackage);
            axios.post('https://cnodejs.org/api/v1/topics/',this.postpackage)
              .then(function (res) {
                console.log(res)
                console.log('hello')
              })
          },
  editorReady (editorInstance) {
    editorInstance.setContent('Hello world!<br>你可以在这里初始化编辑器的初始内容。');
    editorInstance.addListener('contentChange', () => {
      console.log('编辑器内容发生了变化：', editorInstance.getContent());
      this.content= editorInstance.getContent();
      console.log(this.content);
    });
  }
},
mounted:function () {
  console.log('hello world !')
}
    }
</script>

<style scoped>

</style>

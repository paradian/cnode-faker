<template>
    <div>
      <ul>
        <li v-for="(item) of dataArr" :key="item.id" @click="select(item.id)">
           <router-link to="/detail">{{ item.title }}</router-link>
        </li>
      </ul>
    </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "Home",
      data: function(){
          return {
            dataArr:[],
          }

      },
      methods:{
          select:function (id) {
            console.log(id);
            this.$store.commit('getDetail',id)
          }
      },
      mounted: function (res) {
        axios({
          method:'get',
          url:' https://cnodejs.org/api/v1/topics',
          data:res,
        })
          .then(function (data) {
            console.log(data)
            this.dataArr=data.data.data;
            this.$store.commit('save',this.dataArr);
            console.log(this.dataArr)
          }.bind(this))
      }
    }

</script>

<style scoped>

</style>

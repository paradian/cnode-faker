import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    lives:null,
    certain:null,
  },
  mutations: {
   getDetail:function (state,data) {
     state.certain=data;
     console.log(state.certain);

   },
    save:function (state,dataArr) {
     state.lives=dataArr;
      console.log(state.lives)
    }
  },
  actions: {
    getDetail:function (data) {
      axios.get('https://cnodejs.org/api/v1/topics')
        .then(function (data) {
          console.log(data)
        })
    }
  }
})

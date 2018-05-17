// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/index';
import '../static/ueditor1_4_3_3/ueditor.config.js'
import '../static/ueditor1_4_3_3/ueditor.all.min.js'
// import '../static/ueditor/lang/zh-cn/zh-cn.js'
import '../static/ueditor1_4_3_3/ueditor.parse.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

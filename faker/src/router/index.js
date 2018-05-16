import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import AddArticle from '@/components/AddArticle';
import DetailPage from '@/components/Detail-page';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/add',
      name:'AddArticle',
      component:AddArticle
    },
    {
      path:'/detail',
      name:'DetailPage',
      component:DetailPage
    }
  ]
})

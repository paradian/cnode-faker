<template>
  <div id="app">
   <div class="navbar">
     <div class="container">
       <a href="/" class="logo">
         <img src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="">
       </a>
       <form action="/search">
         <input type="text" class="search-query">
       </form>
       <ul class="nav-list">
         <li>
           <router-link to="/">首页</router-link>
         </li>
         <li>
           <router-link to="/">未读信息</router-link>
         </li>
         <li>
           <router-link to="/user">新手入门</router-link>
         </li>
         <li>
           <router-link to="/">关于</router-link>
         </li>
         <li>
           <router-link to="/add">新建主题</router-link>
         </li>
       </ul>
     </div>
   </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  .navbar {
    margin: 0 5px;
    z-index: 999;
    width: auto!important;
    position: relative;
    background: #444;
    font-size: 13px;
  }
  .nav-list {
    padding-bottom: 20px;
    font-size: 13px;
  }
  .nav-list li {
    list-style: none;
    display: inline-block;
    color: #ccc;
    padding: 10px 10px;
  }
  .nav-list li a {
    list-style: none;
    color: #ccc;
    border-bottom: none;
  }
</style>

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
         <li>首页</li>
         <li>未读信息</li>
         <li>新手入门</li>
         <li>关于</li>
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
</style>

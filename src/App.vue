<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">全部</router-link>
      <router-link to="/experience">经验</router-link>
      <router-link to="/position">职位</router-link>
      <router-link to="/interview">面试</router-link>
      <router-link to="/other">其他</router-link>
      <div class="btn_post">发帖</div>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  width: 100%;
  display: flex;
    padding-left: 14px;
    padding-top: 20px;
    padding-bottom: 20px;
    align-items: center;
    border-bottom:  1px solid rgba(239, 239, 239);
}

#nav a {
  font-weight: bold;
  color: rgba(156, 156, 156);
  margin-left: 30px;
  text-decoration: none;
}
#nav .btn_post{
  color: white;
  width: 100px;
  height: 36px;
  background-color: rgba(253, 93, 89);
  border-radius: 6px;
  line-height: 36px;
  margin-left: auto;
  margin-right: 60px;
}

#nav .btn_post:hover{
  cursor: pointer;
}
#nav a.router-link-exact-active {
  color: rgba(251, 84, 85);
}
</style>

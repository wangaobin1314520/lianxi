<template>
  <div id="app">
      <div class="app-top">
        <router-link to="/tab1">热门</router-link>
        <router-link to="/tab2">新书</router-link>
        <router-link to="/tab3">免费</router-link>
        <router-link to="/tab4">完本</router-link>
      </div>
      <div class="main">
        <!-- 一级路由显示区域 -->
        <router-view/>
      </div>
  </div>
</template>

<style lang="scss">
.app-top{
  position: fixed;
  left: 0;
  top: 0;
  width:100vw;
  height:50px;
  background: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  a{
    display: inline-block;
    width: 60px;
    height: 30px;
    line-height: 30px;
    background: #e6e6e6;
    text-align: center;
    text-decoration: none;
    &.router-link-exact-active{
      background:#0f0;
      color: #fff;
    }
  }
}

.main{
  margin-top: 50px;
}
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>

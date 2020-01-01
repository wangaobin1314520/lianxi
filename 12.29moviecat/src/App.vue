<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="App-foot">
      <FooterBar />
    </div>
  </div>
</template>

<script>
import FooterBar from './components/FooterBar.vue'

export default {
  name:"App",
  components:{
    FooterBar
  },
  data() {
    return {
      
    }
  },
};
</script>

<style>
#app {
  width: 100%;
  height: 50px;
  display: flex;
}

/* // router-link:写样式的时候，直接写成a标签 */
a {
  color: #0f0;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  /* &.router-link-exact-active {
    color: #0ff;
  } */
}
</style>

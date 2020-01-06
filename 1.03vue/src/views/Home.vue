<template>
  <div class="home">
    <div class="head">
      <!-- <router-link to="/tab1">待处理</router-link>
      <router-link to="/tab2">已发起</router-link>
      <router-link to="/tab3">已处理</router-link> -->
      <HeaderTab />
    </div>
    <div class="home-top">
      <span v-for="(item, index) in topList" :key="index" :class="topTabIndex===index?'active':''" @click="handClickEvent(index)">
        {{item.title}}
      </span>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { getTabData } from '@/api/api.js'

export default {
  components:{
    HeaderTab:()=>import("@/components/HeaderTab.vue")
  },
  data() {
    return {
      topList:[],
      topTabIndex: 0
    }
  },
  created() {
    this.getListData()
    this.getTopListFn()
  },
  methods: {
    handClickEvent(index){
      // console.log(index);
      this.$store.commit("topTabIndexFn",index)
    },
    getListData(){
      // axios.get("/api/list").then(res=>{
      //   console.log(res.data.list);
      //   const listData = res.data.list
      //   this.$store.commit("getListDataFn",listData)
      // })
      getTabData({
        url:"/api/list",
        method:"get",
        params:{
          "user":"bin",
          "pwd":"520"
        }
      }).then(res=>{
        console.log(res.data.list,"listData-------")
        const listData = res.data.list
        this.$store.commit("getListDataFn",listData)
      })
    },
    getTopListFn(){
      console.log(this.getTopList)
      this.topList = this.getTopList
    },
    getTabIndexFn(){
      this.tabIndex = this.getTabIndex;
    }
  },
  computed: {
    getTopList(){
      return this.$store.state.topList;
    },
    getTopTabIndex(){
      return this.$store.state.topTabIndex;
    }
  },
  watch: {
    getTopTabIndex(v){
      this.topTabIndex = v;
    }
  },
}
</script>

<style lang="scss">
  .home{
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    .head{
      width:100%;
      height:50px;
      display:flex;
      justify-content: space-around;
      align-items: center;
      a{
          text-decoration: none;
          color:#000;
          &.router-link-exact-active{
            color:#0f0!important;
          }
      }
    }
  }
  .home-top{
    width:100%;
    height:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    span{
      display: inline-block;
      width:100px;
      height:35px;
      line-height: 35px;
      text-align: center;
      // background: #176143;
      color: #176143;
      border:solid 1px #176143;
    }
    :nth-child(1){
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
    }
    :nth-child(2){
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
    }
  }
 
  .active{
    color:#fff!important;
    background:#176143!important;
  }
</style>
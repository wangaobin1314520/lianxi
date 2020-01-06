import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // tab切换数据
    topList:[{
      title:"加班",
      state:0
    },
    {
      title:"休假",
      state:1
    }],
    // 头部的tab切换
    headTabIndex:0,
    // tab切换
    topTabIndex:0,
    // 总数据
    listData:[]
  },
  mutations: {
    topTabIndexFn(state,index){
      // console.log(index,"vuex======")
      state.topTabIndex = index;
      console.log(state.topTabIndex,"vuex=topTabIndex=====")
    },
    getListDataFn(state,listData){
      state.listData = listData;
    },
    headTabIndexFn(state,index){
      state.headTabIndex = index
    }
  },
  actions: {
  },
  modules: {
  }
})

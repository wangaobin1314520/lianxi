import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 列表页数据
    getListData1:[],
    // 书架数据
    shuJiaData:[]
  },
  mutations: {
    getListData1vuex(state,data1){
      console.log(data1)
      state.getListData1 = data1
    },
    clickAddBtn(state,detailData){
      const flag = state.shuJiaData.find(val=>val.bookId === detailData.bookId)
      console.log(flag)
      if(!flag){
        state.shuJiaData.push(detailData)
        console.log(state.shuJiaData)
      }else{
        console.log("数据已经存在")
      }
    }
  },
  actions: {
  },
  modules: {
  }
})

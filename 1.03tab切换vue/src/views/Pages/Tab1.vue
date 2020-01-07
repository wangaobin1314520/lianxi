<template>
  <div class="tab1">
    <!-- tab1页面
    <hr /> -->
    <div 
    class="headTab"
    v-for="(item,index) in listData" 
    :key="index"
    v-if="item.index===headTabIndex && item.state===topTabIndex"
    >
        <!-- {{item}} -->
        <img :src="item.img" alt="bin" />
        <span>{{item.title}}</span>
    </div>

    <!-- 弹出层 -->
    <van-popup v-model="show" position="bottom" :style="{ height: '20%' }" class="dialogBox">
      <span @click="() => handleOverTime(0)">加班</span>
      <span @click="() => handleVacaTion(1)">休假</span>
    </van-popup>

    <div class="dialog" @click="() => this.handleDialog()">
      发起任务
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      listData: [],
      // 头部的tab切换
      headTabIndex: 0,
      // 第二个tab切换
      topTabIndex:0,
      // 控制弹出层
      show: false
    };
  },
  created() {
  },
  methods: {
   handleDialog(){
     this.show = !this.show
   },
   // 点击弹出层中的加班 
   handleOverTime(index){
     console.log(index,"加班");
     this.$router.push(`/overtime/${index}`)
   },
   // 点击弹出层中的休假
   handleVacaTion(index){
     console.log(index,"休假");
     this.$router.push(`/overtime/${index}`)
   }
  },
  computed: {
    getTab1ListData() {
      return this.$store.state.listData;
    },
    getHeadTabIndex() {
      return this.$store.state.headTabIndex;
    },
    getTopTabIndex(){
      return this.$store.state.topTabIndex;
    }
  },
  watch: {
    getTab1ListData(v) {
      console.log(v, "tab1--listData");
      this.listData = v;
    },
    getHeadTabIndex(v) {
      console.log(v, "tab1--headTabIndex");
      this.headTabIndex = v;
      console.log(this.headTabIndex,"vvv------")
    },
    getTopTabIndex(v){
      console.log(v, "tab1--topTabIndex");
      this.topTabIndex = v;
    }
  }
};
</script>

<style lang="scss" scoped>
  .headTab{
    margin-left:25px;
    margin-top:25px;
  }

  .dialogBox{
    width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      span{
          display: inline-block;
          width: 60px;
          height: 60px;
          line-height: 60px;
          text-align: center;
          background:#09f;
          border-radius: 50%;
          color: #fff;
      }
  }

  .dialog{
    width:120px;
    height:40px;
    line-height: 40px;
    text-align: center;
    position: fixed;
    right: 10px;
    bottom: 10px;
    border-radius: 20px;
    background: #156644;
    color:#fff;
  }
</style>
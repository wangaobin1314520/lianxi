<template>
  <div class="tab3">
    tab3页面
    <hr />
    <div
      v-for="(item,index) in listData"
      :key="index"
      v-if="2===item.index && item.state === tabIndex"
    >
      <img :src="item.img" alt="bin" />
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listData: [],
      tabIndex: 0
    };
  },
  created() {
    this.getListDataFn();
    this.getTabIndexFn();
  },
  methods: {
    getListDataFn() {
      console.log(this.getTab1ListData, "created======");
      this.listData = this.getTab1ListData;
    },
    getTabIndexFn(v) {
      console.log(this.getTabIndex);
      this.tabIndex = v;
    }
  },
  computed: {
    getTab1ListData() {
      return this.$store.state.listData;
    },
    getTabIndex() {
      return this.$store.state.tabIndex;
    }
  },
  watch: {
    // 监听名字写的有误，其他两个页面也要改
    getTabIndex(v) {
      console.log(v, "tab1--listData-------------------------------");
      this.getTabIndexFn(v)
    },
    getTab1ListData(v) {
      console.log(v, "tab1--tabIndex");
    }
  }
};
</script>

<style>
</style>
<template>
  <div class="tab1">
    tab1页面
    <hr />
    <div class="tab1-son" v-for="(item,index) in this.getBookData1" :key="index">
      <img :src="beforeImg + item.coverUrl" @click="handleDetail(item.bookId)" alt="bin" />
      <br />
      <span>{{item.updteChapterName}}</span>
      <br />
      <span>{{item.subCateName}}</span>
      <br />类型:
      <b>{{item.categoryName}}</b>
      <br />作者:
      <em>{{item.authorName}}</em>
      <br />描述:
      <span>{{item.description}}</span>
      <hr />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      beforeImg: "https://static.zongheng.com/upload/s_image/"
    };
  },
  created() {
    this.getListData1Fn();
    // console.log(this.getBookData1)
  },
  methods: {
    getListData1Fn() {
      if (!this.$store.state.getListData1.length) {
        axios.get("/api/list").then(res => {
          console.log(res.data.data.ranklist1);
          this.$store.commit("getListData1vuex", res.data.data.ranklist1);
        });
      }
    },
    handleDetail(id) {
      console.log(id);
      this.$router.push({
        path: `/detail/${id}`
      });
    }
  },
  computed: {
    getBookData1() {
      return this.$store.state.getListData1;
    }
  }
};
</script>

<style scoped lang="scss">
</style>
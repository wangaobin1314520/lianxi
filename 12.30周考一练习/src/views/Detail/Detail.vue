<template>
  <div class="detail">
      详情页面
      <hr/>
      <div 
      class="detail-content"
      v-if="detailData.length" 
      >
          <img :src="beforeImg + detailData[0].coverUrl" />
          <div 
          class="addBtn"
          @click="handleAddEvent(detailData)"
          >
            加入书架
          </div>
          <br/>
           <span>{{detailData[0].updteChapterName}}</span><br/>
            <span>{{detailData[0].subCateName}}</span><br/>
            类型: <b>{{detailData[0].categoryName}}</b><br/>
            作者: <em>{{detailData[0].authorName}}</em><br/>
            描述: <span>{{detailData[0].description}}</span>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            detailData:[],
            beforeImg:"https://static.zongheng.com/upload/s_image/"
        }
    },
    created() {
        console.log(this.$route.params.id)
        this.getDetailData()
    },
    methods: {
        getDetailData(){
            axios.get(`/api/detail?id=${this.$route.params.id}`).then(res=>{
                console.log(res.data.list)
                this.detailData = res.data.list
            })
        },
        // 点击添加按钮，把数据添加到书架中
        handleAddEvent(detailData){
            console.log(detailData)
            this.$store.commit("clickAddBtn",detailData)
        }
    },
}
</script>

<style lang="scss">
    .addBtn{
        display: inline-block;
        width: 100px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background: #0f0;
        color: #fff;
        border-radius: 20px;
    }
</style>
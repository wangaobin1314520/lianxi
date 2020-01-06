<template>
  <div class="headtab">
      <div 
      class="topBox"
      v-for="(item,index) in list"
      :key="index"
      :class="headTabIndex===index?'headactive':''"
      @click="headerTabIndex(index)"
      >
        {{item.title}}
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            list:[
                {
                    title:"待处理",
                    state:0
                },
                {
                    title:"已发起",
                    state:1
                },
                {
                    title:"已处理",
                    state:2
                }
            ],
            headTabIndex:0
        }
    },
    methods: {
        headerTabIndex(index){
            // console.log(index)
            this.$store.commit("headTabIndexFn",index)
        },
        getTabIndex(v){
            this.headTabIndex = v;
        }
    },
    created() {
        
    },
    computed: {
        getHeadTabIndex(){
            return this.$store.state.headTabIndex;
        }
    },
    watch: {
        getHeadTabIndex(v){
            console.log(v,"headerTabIndex")
            this.getTabIndex(v)
        }
    },
}
</script>

<style lang="scss" scoped>
    .headtab{
        width: 100%;
        height: 45px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .topBox{
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .headactive{
            color: #0f0;
        }
    }
</style>
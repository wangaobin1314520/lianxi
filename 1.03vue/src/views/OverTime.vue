<template>
    <div class="overtime">
        <div class="content">
            {{type==="0"?"加班":"休假"}}申请表
        </div>
        <hr/>
        <div class="content">
            {{type==="0"?"加班":"休假"}}日期: 
            <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions0">
            </el-date-picker>
        </div>
        <div class="content">
            {{type==="0"?"加班":"休假"}}类型: 
            {{type==="0"?"加班":"休假"}}
        </div>
       
        <div class="content">
            {{type==="0"?"加班":"休假"}}起始时间: <el-time-select
                v-model="value2"
                :picker-options="{
                    start: '08:30',
                    step: '00:15',
                    end: '18:30'
                }"
                placeholder="选择时间">
            </el-time-select>
        </div>

        <div class="content">
            {{type==="0"?"加班":"休假"}}截止时间:
            <el-time-select
            v-model="value3"
            :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30'
            }"
            placeholder="选择时间">
            </el-time-select>
        </div>

        <div class="content">
            上传图片: <van-uploader v-model="fileList" multiple />
        </div>

        <div class="bottom">
            <el-button 
            class="bottomBtn"
            @click="()=>{this.$router.go(-1)}"
            >
                取消
            </el-button>
            <el-button 
            type="primary" 
            class="bottomBtn"
            @click="() => {this.handleSubmit()}"
            >
                提交
            </el-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            type:null,
            // 选择日期
            value1:"",
            // 起始时间
            value2:"",
            // 截止时间
            value3:"",
            pickerOptions0: {
                disabledDate(time) {
                    return time.getTime() < Date.now() - 8.64e7;
                }
            },
            // 上传文件数据
            fileList:[]
        }
    },
    created() {
        this.getTypeFn();
        // console.log(this.$route.params.type)
    },
    methods: {
        getTypeFn(){
            this.type = this.$route.params.type;
            console.log(this.type)
        },
        handleSubmit(){
            console.log(this.value1,this.value2,this.value3,this.fileList)
        }
    },
}
</script>

<style lang="scss" scoped>
    .content{
        margin-top:25px;
        margin-left:25px;
    }
    .bottom{
        position: fixed;
        bottom: 10px;
        left: 0;
        width: 100vw;
        height: 50px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .bottomBtn{
            width:50%;
        }
    }
</style>
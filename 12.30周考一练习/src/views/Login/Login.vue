<template>
  <div class="login">
      账号: <input type="text" v-model="user" /><br/>
      密码: <input type="text" v-model="pwd" /><br/>
      <button @click="handLoginBtn">登录</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            user:"",
            pwd:""
        }
    },
    methods: {
        handLoginBtn(){
            axios.get(`/api/login?user=${this.user}&pwd=${this.pwd}`).then(res=>{
                console.log(res.data)
            })
        }
    },
    created() {
        
    },
}
</script>

<style>
input{
    width: 200px;
    height: 35px;
    border: solid 1px #0f0;
}
</style>
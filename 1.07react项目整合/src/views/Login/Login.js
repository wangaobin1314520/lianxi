import React, { Component } from 'react'

import { getLoginMsg } from '../../api/api.js'

import "../../mock/index.js"

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            user:"",
            pwd:""
        }
    }
    render() {
        return (
            <div className="login">
                登录页面<hr/>
                <input type="text" placeholder="请输入手机号" value={this.state.user} onChange={(e)=>{this.userChangEvent(e)}} /><br/>
                <input type="text" placeholder="请输入密码" value={this.state.pwd} onChange={(e)=>{this.pwdChangEvent(e)}} /><br/>
                <div className="loginBtn" onClick={()=>{this.handleLoginBtn()}}>登录</div>
            </div>
        )
    }

    userChangEvent = (e) =>{
        console.log(e.target.value)
        const value = e.target.value
        this.setState({
            user:value
        })
    }

    pwdChangEvent = (e) =>{
        console.log(e.target.value)
        const value = e.target.value
        this.setState({
            pwd:value
        })
    }

    handleLoginBtn = () =>{
        console.log(this.state.user,this.state.pwd)
        getLoginMsg({
            user:this.state.user,
            pwd:this.state.pwd
        }).then(res=>{
            console.log(res.data,"res")
            if(res.data.errCode===0){
                console.log("登录成功")
                this.props.history.push("/home")
            }else{
                console.log("登录失败")
            }
        })
        this.setState({
            user:"",
            pwd:""
        })
    }

}

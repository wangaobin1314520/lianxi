import Mock from "mockjs"


const types = [0,1,2]
// 列表页数据
var data = Mock.mock({
    "list|30":[
        {
            "type|+1":types,
            "title":"@ctitle(4)"
        }
    ]
})
console.log(data.list)
Mock.mock(/\/api\/list/,data.list)

// 登录接口验证数据
var loginUser = [
    {
        user:"bin",
        pwd:520
    }
]
Mock.mock(/\/api\/login\.*/,function(opt){
    console.log(JSON.parse(opt.body))
    let { user , pwd } = JSON.parse(opt.body)
    console.log(user,pwd)
    let flag = loginUser.some(val=>val.user === user && val.pwd === pwd*1)
    console.log(flag,"flag------")
    if(flag){
        return {
            errCode:0,
            msg:"登录成功"
        }
    }else{
        return {
            errCode:1,
            msg:"登录失败"
        }
    }
})
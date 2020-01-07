const data = require("./public/mock/index.js")
console.log(data.list)

module.exports = {
    lintOnSave : false , //关闭代码检测工具
    devServer:{
        before:function(app){
            app.get("/api/list",(req,res)=>{
                // console.log(req.query,"vue.config.js---------req------------")
                res.json({
                    errCode:0,
                    list:data.list
                })
            })
        }
    }
}
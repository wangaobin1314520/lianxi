const dataBook = require('./public/mock/data.json')
console.log(dataBook.ranklist1)

// 修改这个文件夹需要重新起服务
module.exports = {
    lintOnSave:false, //关闭代码检测工具
    devServer:{
        before:function(app){
            // 列表数据接口
            app.get("/api/list",(req,res)=>{
                res.json({
                    errCode:0,
                    data:dataBook
                })
            })

            // 详情页接口
            app.get("/api/detail",(req,res)=>{
                const { id } = req.query;
                console.log(id)
                res.json({
                    errCode:0,
                    list:dataBook.ranklist1.filter(val=>val.bookId == id)
                })
            })

            // 导航守卫登录页面接口
            app.get("/api/login",(req,res)=>{
                console.log(req.query)
            })
        }
    }
}
import service from './request.js'

// 登录页面接口
export const getLoginMsg = data =>{
    return service({
        url:"/api/login",
        method:"get",
        data
    })
}

// 首页数据接口
export const getListData = data =>{
    return service({
        url:"/api/list",
        method:"get",
        data
    })
}
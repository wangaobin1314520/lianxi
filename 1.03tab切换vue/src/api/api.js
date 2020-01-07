import ajax from "./request"

// 写项目中的所有接口

export const getTabData = ({url,method,params}) =>{
    console.log(url,method,params,"api.js-------")
    return ajax({
        url:url,
        mtehod:method,
        params
    })
}
const defaultState = {
    listData:[],
    columns:[],
    data:[]
}

export const reducerName = (state=defaultState,action) =>{
    // 拷贝数据  修改数据  返回确定数据
    const newState = JSON.parse(JSON.stringify(state))

    // 页面数据
    if(action.type === "init_list_data"){
        newState.listData = action.listData
        return newState
    }

    if(action.type === "init_columns"){
        newState.columns = action.columns
        console.log(action.columns,"redux-columns")
        return newState
    }

    if(action.type === "init_data"){
        newState.data = action.data
        console.log(action.data,"redux-data")
        return newState  
    }

    return newState
}
const defaultState = {
    // 存放数据的地方
    listData: []
}

export const reducerName = (state=defaultState, action) =>{
    const newState = JSON.parse(JSON.stringify(state))

    if(action.type === "init_list_data"){
        newState.listData = action.listData
        return newState
    }

    return newState
}
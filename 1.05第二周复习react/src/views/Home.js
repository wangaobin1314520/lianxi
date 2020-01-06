import React, { Component } from 'react'

import { connect } from 'react-redux'

class Home extends Component {
    render() {
        return (
            <div className="home">
                home页面
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // 存放从redux中获取的数据
        listData: state.listData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // 写函数或方法

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
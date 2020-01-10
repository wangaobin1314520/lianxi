import React, { Component } from 'react'

import { connect } from "react-redux";

import { NavLink } from 'react-router-dom'

import { getListData } from '../../api/api.js'
import "../../mock/index.js"

import RouterView from '../../router/index.js'

// 引用antd
import { Menu, Icon } from 'antd';

class Home extends Component {

    state = {
        collapsed: false,
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <div className="home">
                <div className="leftBox">
                    <div style={{ width: 150 }}>
                        <Menu
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                            theme="dark"
                            inlineCollapsed={this.state.collapsed}
                        >
                            <Menu.Item key="1">
                                <Icon type="pie-chart" />
                                <span>
                                    <NavLink to="/home/tab1">货款订单</NavLink>
                                </span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="desktop" />
                                <span>
                                    <NavLink to="/home/tab2">转单订单</NavLink>
                                </span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="inbox" />
                                <span>
                                    <NavLink to="/home/tab3">保险订单</NavLink>
                                </span>
                            </Menu.Item>
                        </Menu>
                    </div>
                </div>
                <div className="rightBox">
                    <RouterView routes={this.props.routes} />
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.props.getListDataStore()
    }

}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getListDataStore(){
            getListData().then(res => {
                console.log(res.data, "listData-----")
                const listData = res.data
                const action = {
                    type:"init_list_data",
                    listData
                }
                dispatch(action)
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
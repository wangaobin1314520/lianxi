import React, { Component } from 'react'

import { connect } from "react-redux"

import Tongjitu from "../../../components/Tongjitu.js"

class Tab3 extends Component {
    render() {
        const { listData } = this.props
        return (
            <div className="tab3">
                tab3页面
                <hr/>
                <div className="tab3Box">
                    <Tongjitu />
                </div>
                <div className="tab3cont">
                    {
                        listData.map((item,index)=>{
                            if(item.type===2){
                                return (
                                    <div key={index} className="tab3son">
                                        <span>
                                            {item.title}
                                        </span>
                                    </div>
                                )
                            }else{
                                return null
                            }
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        listData:state.listData
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tab3)
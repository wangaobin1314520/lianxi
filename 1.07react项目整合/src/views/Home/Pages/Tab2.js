import React, { Component } from 'react'

import { connect } from "react-redux"

class Tab2 extends Component {
    render() {
        const { listData } = this.props
        return (
            <div className="tab2">
                tab2页面
                <hr/>
                <div className="huatu">
               {/* { 
                    option = {
                        xAxis: {
                            type: 'category',
                            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [{
                            data: [120, 200, 150, 80, 70, 110, 130],
                            type: 'bar'
                        }]
                    }
                } */}

                </div>
                <div className="tab2cont">
                    {
                        listData.map((item,index)=>{
                            if(item.type===1){
                                return (
                                    <div key={index} className="tab2son">
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

export default connect(mapStateToProps, mapDispatchToProps)(Tab2)
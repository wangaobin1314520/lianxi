import React, { Component } from 'react'

import { connect } from "react-redux"

import { Table } from 'antd';
import 'antd/dist/antd.css';

class Tab1 extends Component {
    render() {
        const { listData, data, columns } = this.props
        console.log(data, "data")
        console.log(columns, "columns")
        return (
            <div className="tab1">
                tab1页面
                <hr />
                {/* <table>
                    <tr>
                        <th>111</th>
                        <th>111</th>
                        <th>111</th>
                    </tr>
                    <tr>
                        <td>222</td>
                        <td>222</td>
                        <td>222</td>
                    </tr>
                    <tr>
                        <td>333</td>
                        <td>333</td>
                        <td>333</td>
                    </tr>
                </table> */}
                <div className="tableBox">
                    <Table columns={columns} dataSource={data} scroll={{ x: 1500, y: 300 }} />
                </div>
                <div className="tab1cont">
                    {
                        listData.map((item, index) => {
                            if (item.type === 0) {
                                return (
                                    <div key={index} className="tab1son">
                                        <span>
                                            {item.title}
                                        </span>
                                    </div>
                                )
                            } else {
                                return null
                            }
                        })
                    }
                </div>
            </div>
        )
    }


    componentDidMount() {
        this.props.getColumns()
        this.props.getData()
    }

}

const mapStateToProps = (state) => {
    return {
        listData: state.listData,
        columns: state.columns,
        data: state.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getColumns() {
            const columns = [
                {
                    title: 'Full Name',
                    width: 100,
                    dataIndex: 'name',
                    key: 'name',
                    fixed: 'left',
                },
                {
                    title: 'Age',
                    width: 100,
                    dataIndex: 'age',
                    key: 'age',
                    fixed: 'left',
                },
                {
                    title: 'Column 1',
                    dataIndex: 'address',
                    key: '1',
                    width: 150,
                },
                {
                    title: 'Column 2',
                    dataIndex: 'address',
                    key: '2',
                    width: 150,
                },
                {
                    title: 'Column 3',
                    dataIndex: 'address',
                    key: '3',
                    width: 150,
                },
                {
                    title: 'Column 4',
                    dataIndex: 'address',
                    key: '4',
                    width: 150,
                },
                {
                    title: 'Column 5',
                    dataIndex: 'address',
                    key: '5',
                    width: 150,
                },
                {
                    title: 'Column 6',
                    dataIndex: 'address',
                    key: '6',
                    width: 150,
                },
                {
                    title: 'Column 7',
                    dataIndex: 'address',
                    key: '7',
                    width: 150,
                },
                { title: 'Column 8', dataIndex: 'address', key: '8' },
                {
                    title: 'Action',
                    key: 'operation',
                    fixed: 'right',
                    width: 100,
                    render: () => <botton>删除</botton>,
                },
            ];
            console.log(columns, "columns-Tab1.js")
            const action = {
                type: "init_columns",
                columns
            }
            dispatch(action)
        },
        getData() {
            const data = [];
            for (let i = 0; i < 100; i++) {
                data.push({
                    key: i,
                    name: `Edrward ${i}`,
                    age: 32,
                    address: `London Park no. ${i}`,
                });
            }
            const action = {
                type: "init_data",
                data
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tab1)
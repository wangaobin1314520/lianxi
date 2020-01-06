// import Mock from 'mockjs'
const Mock = require("mockjs")

const types = [ 0 , 1 , 2 ]
const state = [ 0 , 1 ]

var data = Mock.mock({
    "list|18":[{
        "index|+1":types,
        "state|+1":state,
        "img":"@image(100x50,@color)",
        "title":"@ctitle(4)"
    }]
})

// Mock.mock("/api/list",data.list)

module.exports = data
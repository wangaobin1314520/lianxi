import Mock from 'mockjs'

var data = Mock.mock({
    "list|2":[{
        "id|+1":0,
        "img":"@image(100x50,@color)",
        "title":"@ctitle(4)"
    }]
})

Mock.mock("/api/list",data.list)
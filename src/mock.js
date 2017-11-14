const Mock = require('mockjs')
//使用mockjs模拟数据
// Mock.mock('http://g.cn',{
//         "array|20": [
//             {
//                 "name|+1": [
//                 "吃早饭",
//                 "今日事，今日毕",
//                 "早起",
//                 "多喝水",		        
//                 "运动",
//                 "每天看书1小时",
//                 "吃水果",
//                 "不吃零食"
//                 ],
//                 "days|0-999":30,
//                 "stime": "@datetime('yyyy MM.dd')",
//                 "etime": "@datetime('yyyy MM.dd')",
//                 "habitID|+1":1,
//                 "imgsrc|1-4":1
//             }
//         ]
//   })
Mock.mock('http://home.num.cn',{
    "num": {
        userNum:'86',
        jiaoyi:"12.32"
    }
})
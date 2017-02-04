var router = require('koa-router')();
var Mock = require('mockjs');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');



router.get('/', async function (ctx, next) {

// Connection URL
    var url = 'mongodb://localhost:27017/users';
// Use connect method to connect to the Server

    var data = Mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'list|1-10': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1
        }]
    });

    ctx.body = JSON.stringify(data, null, 4);

});

module.exports = router;

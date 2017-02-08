var router = require('koa-router')();
var Mock = require('mockjs');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var store = require('../service/store');

router.get('/getRoute', async function (ctx, next) {
    var rows = await store.getRouteList();
    var route = JSON.parse(JSON.stringify(rows))[0];
    console.log(route.lines);
    route.lines = route.lines.split(',');
    ctx.body = JSON.stringify(route)
});

module.exports = router;

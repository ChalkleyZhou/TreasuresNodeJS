var router = require('koa-router')();
var Mock = require('mockjs');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var store = require('../service/store');

router.get('/', async function (ctx, next) {
    var rows = await store.getRouteList();
    ctx.body = rows;
});

module.exports = router;

import Router from 'koa-router';
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var router = Router();

router.get('/', function (ctx, next) {

    MongoClient.connect(url, function(err, db) {
        var collection = db.collection('users');
        // collection.insertMany([
        //     {uid : 1, name: '大蒜小子'}, {uid : 2, name: '大蒜二号'}, {uid : 3, name: '大蒜三号'}
        // ], function(err, result) {
        //     assert.equal(err, null);
        //     assert.equal(3, result.result.n);
        //     assert.equal(3, result.ops.length);
        //     console.log("Inserted 3 documents into the users collection");
        // });

        collection.find({}).toArray(function(err, docs) {
            assert.equal(err, null);
            assert.equal(3, docs.length);
            console.log("Found the following records");
            console.dir(docs);
        });

        db.close();
    });

  ctx.body = {
    title: 'users'
  };
});

module.exports = router;

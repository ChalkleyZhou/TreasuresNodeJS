var mysql = require('mysql2');
var options = {user: 'root', database: 'Treasures', password: '123456'};
var pool = mysql.createPool(options);

//内部对mysql的封装，执行sql语句
function execQuery(sql, values, callback) {
    var errinfo;
    pool.getConnection(function(err, connection) {
        if (err) {
            errinfo = 'DB-获取数据库连接异常！';
            throw errinfo;
        } else {
            var querys = connection.query(sql, values, function(err, rows) {
                release(connection);
                if (err) {
                    errinfo = 'DB-SQL语句执行错误:' + err;
                    callback(err);
                } else {
                    callback(null,rows);        //注意：第一个参数必须为null
                }
            });
        }
    });
}

function release(connection) {
    try {
        connection.release(function(error) {
            if (error) {
                console.log('DB-关闭数据库连接异常！');
            }
        });
    } catch (err) {}
}
//对外接口返回Promise函数形式
exports.getRouteList = function(){
    return new Promise(function(resolve, reject){
        var sql = 'select * from routes';
        execQuery(sql, [] , function(err, rows){
            if(err){
                reject(err);
            }else{
                resolve(rows);
            }
        })
    });
};
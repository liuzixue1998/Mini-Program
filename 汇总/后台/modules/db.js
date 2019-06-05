const mysql = require('mysql');
var con = mysql.createConnection({
    host:"39.96.30.52",
    user:"master",
    password:"master2018",
    database:"miniprogram"
})//数据库连接配置



exports.con = con;

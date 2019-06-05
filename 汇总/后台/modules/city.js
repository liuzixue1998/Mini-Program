var express = require('express');
const db = require('../modules/db').con;


exports.hot_city = function(req,res){
  var city = req.query.city;
  db.query('select * from hot_city where city=?',[city],(err,result)=>{
    if(err){
      res.send({
        status: 0,
        info: 'error',
        message: '数据库错误'
      })
    }else{
      res.send(result);
    }
  })
}


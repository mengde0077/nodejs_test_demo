/*
* @Author: caolinming
* @Date:   2017-05-05 11:30:12
* @Last Modified by:   caolinming
* @Last Modified time: 2017-05-05 11:30:37
*/

'use strict';
//express_demo.js 文件
var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
   res.send('Hello World');
})
 
var server = app.listen(8081, function () {
 
	var host = server.address().address
  	var port = server.address().port
 
  	console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})
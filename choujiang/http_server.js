/*
* @Author: caolinming
* @Date:   2017-05-03 17:51:46
* @Last Modified by:   caolinming
* @Last Modified time: 2017-05-04 15:25:30
*/

'use strict';
var express = require('express');
var readexcel = require('./readexcel');

var path = 'orderlist.xls';
var app = express();

app.get('/data', function (req, res) {
	readexcel.read(path, function (err, datas){
		// console.log('datas' + datas);
		// console.log(datas);
		// res.writeHead(200, {'Content-Type': 'text/plain'});
		res.send(datas);
	});
	
});

app.listen(3000, function () {
	console.log('app is listening at port 3000');
});

/*
* @Author: caolinming
* @Date:   2017-05-03 10:05:56
* @Last Modified by:   caolinming
* @Last Modified time: 2017-05-04 17:28:48
*/

'use strict';
const http = require('http');

var options = {
	hostname: '127.0.0.1',
	port: 3000,   //可选，在hostname为ip地址时使用
	path: '/data',
	method: 'GET'   //请求类型。默认 GET
};

console.log(options);
var req = http.request(options, (res) => {
	console.log('状态码：', res.statusCode);     //打印 https协议状态码
	console.log('请求头：', res.headers);       // 打印 https协议头信息

	res.on('data', (d) => {
		process.stdout.write(d);
		var djson = JSON.parse(d);    //将字符串 转换为 JSON格式
		console.log('');
		console.log(djson);
	})
});

req.on('error', (e) => {
	console.log(e);
});

req.end();
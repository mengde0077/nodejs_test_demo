/*
* @Author: caolinming
* @Date:   2017-05-03 10:05:56
* @Last Modified by:   caolinming
* @Last Modified time: 2017-05-03 11:27:14
*/

'use strict';
const https = require('https');

var options = {
	hostname: 'm.8dol.com',
	// port: 8091,   //可选，在hostname为ip地址时使用
	path: '/timeNotice?area_id=680838&org_id=222&app_version=AD_3.0.4&deviceName=vivo,vivoX7&deviceNo=aacb155b-c360-3b7c-b8e0-790c2feb1e42&longitude=118.771018&latitude=31.975835&',
	method: 'GET'   //请求类型。默认 GET
};

var req = https.request(options, (res) => {
	console.log('状态码：', res.statusCode);     //打印 https协议状态码
	console.log('请求头：', res.headers);       // 打印 https协议头信息
	console.log('res ：', res);       // 打印 https协议头信息

	res.on('data', (d) => {
		process.stdout.write(d);
		var djson = JSON.parse(d);    //将字符串 转换为 JSON格式
		console.log('');
		console.log(djson.result);
		console.log(djson.data.msg);

	})
});

req.on('error', (e) => {
	console.log(e);
});

req.end();
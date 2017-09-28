/*
* @Author: caolinming
* @Date:   2017-03-18 09:50:19
* @Last Modified by:   caolinming
* @Last Modified time: 2017-05-27 14:12:39
*/

'use strict';

var async = require('async');

var concurrencyCount = 0;
console.log('并发计数 concurrencyCount ：' + concurrencyCount);
var fetchUrl = function (url, callback) {
	var delay = parseInt((Math.random() * 10000000) % 2000, 10);
	concurrencyCount++;
	console.log('现在并发数是', concurrencyCount, ', 正在抓取的是', url, '，耗时' + delay + '毫秒');
	setTimeout(function () {
		concurrencyCount--;
		callback(null, url + 'html content');
	}, delay);
};

ajax
var urls = [];
for(var i = 0; i < 30; i++) {
	urls.push('http:datasource_' + i);
}

async.mapLimit(urls, 5, function (url, callback) {
	fetchUrl(url, callback);
}, function (err, result) {
	console.log('final:');
	console.log(result);
});

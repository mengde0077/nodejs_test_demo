/*
* @Author: caolinming
* @Date:   2017-03-21 09:38:30
* @Last Modified by:   caolinming
* @Last Modified time: 2017-03-21 09:46:06
*/

'use strict';

var fs = require('fs');

console.log("txt/sample.txt");
fs.readFile('txt/sample.txt', 'utf8', function (err, data) {
	console.log(data);
});

console.log("txt/sample2.txt");
fs.readFile('txt/sample2.txt', 'utf8', function (err, data) {
	console.log(data);
});

console.log("邪恶金字塔");
fs.readFile('txt/sample.txt', 'utf8', function (err, data) {
	console.log(data);
	fs.readFile('txt/sample2.txt', 'utf8', function (err,data) {
		console.log(data);
	});
});
/*
* @Author: caolinming
* @Date:   2017-05-03 17:51:46
* @Last Modified by:   caolinming
* @Last Modified time: 2017-05-04 11:41:09
*/

'use strict';

var readexcel = require('./readexcel');
var path = 'orderlist.xls';

// console.log(readexcel);
readexcel.read(path, function (err, datas){
	console.log('datas' + datas);
	console.log(datas);

});
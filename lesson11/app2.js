/*
* @Author: caolinming
* @Date:   2017-03-20 15:54:25
* @Last Modified by:   caolinming
* @Last Modified time: 2017-05-05 14:16:19
*/

'use strict';

// for (var i = 0; i < 5; i++){
// 	setTimeout(function(){
// 		console.log(i);
// 	}, 5);
// };

// console.log('正确的方式,为第2个');

// for(var i =0; i < 5; i++){
// 	(function(idx){
// 		setTimeout(function(){
// 			console.log(idx);
// 		}, 5000);
// 	})(i);
// };

console.log('如果要5秒输出一个结果要怎么写？');
for(var i =0; i < 5; i++){
	(function(idx){
		setTimeout(function(){
			console.log(idx);
		}, 5000*i);
	})(i);
};

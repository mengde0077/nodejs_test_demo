/*
* @Author: caolinming
* @Date:   2017-03-20 15:35:23
* @Last Modified by:   caolinming
* @Last Modified time: 2017-03-21 09:40:20
*/

'use strict';

function foo(){
	for (var i = 0; i < 10; i++){
		var value = "hello";
		console.log("hello" + i);
	}
	console.log(i);
	console.log(value);
}

foo();
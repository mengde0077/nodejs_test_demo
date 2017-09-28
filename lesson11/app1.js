/*
* @Author: caolinming
* @Date:   2017-03-20 15:40:57
* @Last Modified by:   caolinming
* @Last Modified time: 2017-03-21 09:40:20
*/

'use strict';

var adder = function (x){
	var base = x;
	return function(n){
		return n + base;
	};
};

var add10 = adder(10);
console.log(add10);
console.log(add10(5));

var add20 = adder(20);
console.log(add20(5));

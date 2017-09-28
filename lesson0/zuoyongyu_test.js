/*
* @Author: caolinming
* @Date:   2017-05-03 17:51:46
* @Last Modified by:   caolinming
* @Last Modified time: 2017-05-05 15:24:24
*/

'use strict';

var a = 1;
var y ;
var yz ;
var z = [];
var par = {};

function text() {
	var y = 1;
	yz = 1;
	for (var i = 1; i < 4; i++){
		var data = [];
		for (var x =1; x < 5; x++){
			data[x] = x + 2;
		};
		z[i] = data + 1;

	};
	par = {
		a: 'aaa',
		b: 'bbb'
	}
	console.log('a1:' + a);
	console.log('y2:' + y);
	console.log('yz2:' + yz);
	console.log('z2:' + z);
	console.log(par);
	console.log('par2: ' + par);

};
text();
console.log('y1:' + y);
console.log('yz1:' + yz);
console.log('z1:' + z);
console.log(par);
console.log('par1: ' + par);
console.log(par.a);

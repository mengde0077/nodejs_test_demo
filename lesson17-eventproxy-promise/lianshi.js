/*
* @Author: caolinming
* @Date:   2017-04-28 14:04:41
* @Last Modified by:   caolinming
* @Last Modified time: 2017-04-28 14:10:15
*/

'use strict';

var obj = {
	step1: function (){
		console.log('a');
		return this;
	},

	step2: function (){
		console.log('b');
		return this;
	},

	step3: function (){
		console.log('c');
		return this;
	},

	step4: function (){
		console.log('d');
		return this;
	} 
}

console.log('--------------\n');
obj.step1().step2().step3();
console.log('--------------\n');
obj.step4().step3().step2();



/*
* @Author: caolinming
* @Date:   2017-03-20 16:06:34
* @Last Modified by:   caolinming
* @Last Modified time: 2017-03-21 09:40:20
*/

'use strict';

var myObject = {value: 100};

myObject.getValue = function (){
	console.log(this.value);
	console.log(this);

	return this.value;
};

console.log(myObject.getValue());



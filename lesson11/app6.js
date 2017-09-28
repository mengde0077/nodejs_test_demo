/*
* @Author: caolinming
* @Date:   2017-03-20 16:49:26
* @Last Modified by:   caolinming
* @Last Modified time: 2017-03-20 16:51:38
*/

'use strict';

var myObject = {value: 100};

var foo = function(){
	console.log(this);
};

foo();

foo.apply(myObject);
foo.call(myObject);

var newFoo = foo.bind(myObject);
newFoo();
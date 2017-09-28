/*
* @Author: caolinming
* @Date:   2017-03-20 16:18:02
* @Last Modified by:   caolinming
* @Last Modified time: 2017-03-20 16:20:04
*/

'use strict';

var myObject = {value: 100};
myObject.getValue = function () {
  var foo = function () {

    console.log(this);// 输出全局对象 global
    console.log(this.value) // => undefined
  };

  foo();

  return this.value;
};

console.log(myObject.getValue()); // => 100
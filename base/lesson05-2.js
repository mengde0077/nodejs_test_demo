/*
* @Author: caolinming
* @Date:   2017-05-18 11:06:20
* @Last Modified by:   caolinming
* @Last Modified time: 2017-05-18 11:45:16
*/

'use strict';
//模块

//  1 ----
// function CoolModule() {
// 	var something = 'cool';

// 	var another = [1, 2, 3];

// 	function doSomething() {
// 		console.log( something );
// 	}

// 	function doAnother() {
// 		console.log( another.join(" ! "));
// 	}

// 	return {
// 		doSomething: doSomething,
// 		doAnother: doAnother
// 	};

// }

// var foo = CoolModule();

// foo.doSomething();  // cool
// foo.doAnother();  // 1 ! 2 ! 3


//  2 ---- 可以给模块传递参数   类似对象的
// function CoolModule(id) {
// 	function identify() {
// 		console.log( id );
// 	}

// 	return {
// 		identify: identify
// 	};
// }

// var foo1 = CoolModule( "foo 1" );   //new 一个对象 ？
// var foo2 = CoolModule( "foo 2" );

// foo2.identify();   //  "foo 2"
// foo1.identify();   //  "foo 1"





//  3 ---- 模块命名将要作为公共API返回的对象
var foo = (function CoolModule(id) {
	function change() {
		publicAPI.identify = identify2;
	}

	function identify1() {
		console.log( id );
	}

	function identify2() {
		console.log( id.toUpperCase() );
	}

	var publicAPI = {
		change: change,
		identify: identify1
	};

	return publicAPI;
})( "foo module" );

foo.identify(); //foo module
foo.change();
foo.identify(); //FOO MODULE









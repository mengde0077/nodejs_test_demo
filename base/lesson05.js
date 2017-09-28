/*
* @Author: caolinming
* @Date:   2017-05-18 09:44:21
* @Last Modified by:   caolinming
* @Last Modified time: 2017-05-18 10:44:17
*/

'use strict';
//闭包的理解

// 1--- 不能算是一个闭包
// function foo() {
// 	var a = 2;

// 	function bar() {
// 		console.log(a);  // 2
// 	}

// 	bar();
// }

// foo();

// 2--- 一个清晰的闭包
// 在 foo() 执行后，其返回值（也就是内部的 bar() 函数 ） 赋值给变量baz 并调用baz()
// function foo() {
// 	var a = 2;

// 	function bar() {
// 		console.log(a);
// 	}

// 	return bar;
// }

// var baz = foo();

// baz(); // 2   ------ 这个才是闭包的效果



// 3--- 
// 把 内部函数 baz 传递给 bar
// function foo() {
// 	var a = 2;

// 	function baz() {
// 		console.log(a); // 2
// 	}

// 	bar( baz );
// }

// function bar(fn) {
// 	fn();    //这就是闭包
// }


// 4--- 传递函数也可以是间接的
// 把 内部函数 baz 传递给 bar
// var fn;
// function foo() {
// 	var a = 2;

// 	function baz() {
// 		console.log(a); 
// 	}

// 	fn = baz; // 将 baz 分配给全局变量
// }

// function bar() {
// 	fn();    //这就是闭包
// }

// foo();

// bar();  //2



// 5--- 只要使用了回调函数  就是使用了闭包
// function wait(message) {
// 	setTimeout( function timer() {
// 		console.log( message );

// 	}, 1000);
// }

// wait('hello closure');



// 6--- 循环和闭包  
// 为什么 会输出 5个 6 ？
//  延迟函数的回调 会在 循环结束时 才 执行
// 这个 i 在一个全局作用域中 ，因此只有1个 i
// for (var i=1; i<=5; i++) {
// 	setTimeout( function timer() {
// 		console.log( i );
// 	}, i*1000);
// }

// 7--- 循环和闭包 ,
// 增加一层空闭包作用域 
// for (var i=1; i<=5; i++) {
// 	(function() {
// 		setTimeout( function timer() {
// 			console.log( i );
// 		}, i*1000 );
// 	})();
// }


// 8--- 循环和闭包 ,
// 增加一层闭包作用域 ，在闭包中储存 每个迭代的 i 的值
// for (var i=1; i<=5; i++) {
// 	(function() {
// 		var j = i;
// 		setTimeout( function timer() {
// 			console.log( j );
// 		}, j*1000 );    // 这里使用 i 或 j  效果是一样的
// 	})();
// }


// 9--- 循环和闭包 ,
// 进行一些改进 ,每次迭代 都形成一个新的作用域
// for (var i=1; i<=5; i++) {
// 	(function(j) {
// 		setTimeout( function timer() {
// 			console.log( j );
// 		}, j*1000 );
// 	})(i);
// }


// 10--- 循环和闭包  let  块作用域
// i 在 一个 for（）{... 块作用域中
for (var i=1; i<=5; i++) {
	let j = i;
	setTimeout( function timer() {
		console.log( j );
	}, j*1000);
}

// 11--- 循环和闭包  let 
// i 在 一个 for（）{... 块作用域中
// for (let i=1; i<=5; i++) {
// 	setTimeout( function timer() {
// 		console.log( i );
// 	}, i*1000);
// }




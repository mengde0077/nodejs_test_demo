function test() {
	console.log("before FOR:" + new Date);
	for (var i = 0; i < 10; i++) {
		setTimeout(function(){
		console.log(new Date);
		}, 2000);
	}
	console.log("after FOR:" + new Date);
};
test();

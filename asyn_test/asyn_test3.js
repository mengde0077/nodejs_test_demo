console.log("before FOR:" + new Date);
function test() {
	for (var i = 0; i < 10; i++) {
		setTimeout(function(){
		console.log(new Date);
		}, 2000);
	}
};
test();
console.log("after FOR:" + new Date);

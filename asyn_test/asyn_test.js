function test() {
	for (var i = 0; i < 10; i++) {
		console.log(new Date);
		setTimeout(function(){}, 2000);
	}
};
test();

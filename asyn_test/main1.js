var fs = require("fs");
//var err = "文件不存在！"; 

var data = fs.readFile('input.txt');
print(err, data);

function print(err, data){
	if (err) return console.error(err);
	console.log(data.toString());
}

console.log("程序执行结束");

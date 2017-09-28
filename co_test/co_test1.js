/*
* 参考 ：http://www.ruanyifeng.com/blog/2015/05/co.html
*/

var fs = require('fs');

var readFile = function (fileName){
  return new Promise(function (resolve, reject){
    fs.readFile(fileName, function(error, data){
      if (error) reject(error);
      resolve(data);
    });
  });
};

var gen = function* (){
  var f1 = yield readFile('./fstab');
  var f2 = yield readFile('./shells');
  console.log(f1.toString());
  console.log(f2.toString());
};


var g = gen();

g.next().value.then(function(data){
  g.next(data).value.then(function(data){
    g.next(data);
  });
})
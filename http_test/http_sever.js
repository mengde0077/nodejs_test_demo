var http = require('http');

 http.createServer(function (request, response) {
 	response.writeHead(200, { 'Content-Type': 'text-plain' });
 	response.end('Hello World\n');
 }).listen(8124);


function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}

http.createServer(onRequest).listen(8126);
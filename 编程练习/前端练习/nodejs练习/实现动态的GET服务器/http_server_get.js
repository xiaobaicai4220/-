var http = require('http');
var message = [
	'hello World',
	'From a basic Node.js server',
	'Take Luck'];
http.createServer(function(req,res){
	res.setHeader("Content-Type","text/html");
	res.writeHead(200);
	res.write('<html><head><title>Simple HTTP Server</title></head>');
	res.write('<body>');
	for(var idx in message){
		res.write('\n<h1>' + message[idx] + '</h1>');
	}
	res.end('\n</body></html>');
}).listen(8080);
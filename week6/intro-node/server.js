// In this file, we will create a super simple web server using vanilla node

// Require a CORE module
var http = require('http');
// Require a 3RD PARTY module
var requestinator = require('request');

var server = http.createServer(function(request, response){

	requestinator.get('http://xkcd.com', function (err, res, body){
		console.log(body)
		response.writeHead(418, {
			"Content-Type" : "text/html"
		});
		response.end(body);
	});




	// // First arg - status code
	// // 2nd   arg - headers
	// response.writeHead(200, {
	// 	// "Content-Type" : "text/html"
	// });
	// response.end("<h1> Hello Porkeyman masters! </h1>")

});

// Listen for connections
server.listen(process.env.PORT || 9001);
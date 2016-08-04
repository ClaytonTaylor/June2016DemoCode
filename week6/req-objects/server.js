// server.js

var express = require('express'),
	bodyParser = require('body-parser'),
	app = express(),
	path = require('path'),
	port = process.env.PORT||1337;

app.use(require('morgan')('dev'));

app.use(express.static(__dirname + '/public'));


app.post('*', bodyParser.json(), bodyParser.urlencoded({ extended: true }))

// Let's make Middleware so we can see our req object info!
app.use(function(req, res, next){

	var requestInfo = {
		query  : req.query,  // Info from GET requests
		body   : req.body,   // Info from POST requests
		params : req.params, // Info from dynamic / paramaterized URLs

		ip       : req.ip,       // IP address
		protocol : req.protocol, // HTTP / HTTPS
		// headers  : req.headers,  // Headers from request
		path     : req.path,     // URL the request is going to
		hostname : req.hostname  // Hostname 
	}

	console.log(requestInfo);
	next(); // Lets the middleware chain continue

})

// Require our routes
require('./routes')(app)


app.listen(port, function() {
	console.log('Our server is up! On port:', port)
})

var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');

// Create the express App object
var app = express();

// Mount middleware
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(logger('dev'));

// Routes
app.get('/', function(req, res){
	// res.send('Hello Squirrel');
	res.sendFile('main.html', {
		root : './public/html'
	});
});

// Listen
var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log(`Server Running at ${port}`);
});
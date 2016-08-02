var express    = require('express');
var bodyParser = require('body-parser');

// Create an APP object
var app = express();
// console.log(app);

// GET - '/'
app.get('/', function(req, res){
	res.send('<h1> Hello Squirrel </h1>');
});

// Listen for connections
app.listen(process.env.PORT || 3000, function(){
	console.log('Server up and running!');
});
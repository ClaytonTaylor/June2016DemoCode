var express    = require('express');
var bodyParser = require('body-parser');

// Create an APP object
var app = express();
// console.log(app);

// Instead of registering a GET route for EVERY file going to the client, we can use express to set up a static file server
// app.use's get called on EVERY request - used for mounting middleware
app.use(express.static(__dirname + '/public'));
// ^^^ this registers GET route handlers for every file in the PUBLIC folder

app.use(bodyParser.urlencoded({extended : true}));
// search=bill%20johnson&order=desc
// {
// 	search : 'bill johnson',
// 	order  : 'desc'
// }
// var requestBody = 'search=bill%20johnson&order=desc'
// requestBody.split('&').split('=').replace(
// 	'%20', ' ')

app.use(bodyParser.json());


// GET - '/'
app.get('/', function(req, res){
	// res.send('<h1> Hello Squirrel </h1>');
	console.log('ET phone home...', req.query);
	res.sendFile('index.html', {root : './public/html'});
});
app.get('/about', function(req, res){
	res.sendFile('about.html', {root : './public/html'});
});

app.post('/createuser', function(req, res){
	console.log('Creating a user...', req.body);
	res.send(`Welcome Back, ${req.body.username}!`);
});

// Registering a GET route for every file the client needs is horribly inefficient, time-consuming, and error prone
// app.get('/main.css', function(req, res){
// 	res.sendFile('main.css', {root : './public/css'});
// })
// app.get('/main2.css', function(req, res){
// 	res.sendFile('main.css', {root : './public/css'});
// })


// Listen for connections
app.listen(process.env.PORT || 3000, function(){
	console.log('Server up and running!');
});

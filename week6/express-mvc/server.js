/*
    MVC is an acronym for Model, View, Controller

    - common pattern for GUI apps
    - gives the ability to seperate conerns

    (M)odels
    - in express, models will most likely be communiting with some sort of database, or datastore
	- many times will have some sort SCHEMA
		* SHEMA - describing the strucure of your database
		[{
			name: "Billy Bob", // String
			age: 30 // Integer,
			email: 'billybobbery@email.com'
			createdAt: 14598756847 // Integer
		},{
			name: "Jimmy John", // String
			age: 50, // Integer
			email: 'jimmyjohnery@email.com' // String
			createdAt: 14598756847 // Integer
		}]
	- strucure of data and storage
	- validation and formating of data

	(V)iews
	- represent data
	- for SPAs, handled Angular using HTML markup
	- are often also implemented via server-side templeting
		* (pug.js, ejs)

	(C)ontrollers
	- are the glue between the model and the views
	- responsible for the logic that pulls in data and passing it to the view
	- transform the way the data IS to what the user SEES
	- used to make updates to model
	- are used on both the Client & Server

*/

var express = require('express'),
	bodyParser = require('body-parser'),
	app = express(),
	port = process.env.PORT||1337;

app.use(require('morgan')('dev'));

app.post('*', bodyParser.json(), bodyParser.urlencoded({ extend: true }))

// requiring a folder with index.js will automatically load index.js
// similar to:
// angular.module('myModule').controller('controllerName', controllerNamedFn)
require('./routes')(app)

app.listen(port, function() {
	console.log('Our MVC Server is up! On port:', port)
})

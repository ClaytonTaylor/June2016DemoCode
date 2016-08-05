var express = require('express'), // express framework
    bodyParser = require('body-parser'), // parse POST payloads
    logger = require('morgan'), // log out requests
    port = process.env.PORT || 1337,
    Routes = require('./routes'), // our routes/controllers
    path = require('path'), // built-in node module for resolving paths
    app = express(); // our express APP object

// app.use :: speaking in code: mounting middleware via the USE method (vertically!)
app.use( logger('dev') );

// mount bodyParser (horizontally) across all post requests
app.post('*', bodyParser.json(), bodyParser.urlencoded({ extended: true }));

// vetically mounting a file server, pointing to public
app.use(express.static(path.join(__dirname,'public')));

// set variable in the app objects
app.set('publicHTML', __dirname +'/public/html');

console.log(__dirname+'/public/html');

// make sure you mount routes BELOW vertically mounted middleware!
Routes(app);

app.listen(port, (error) => {
    if( error ) {
        console.error('Everything crashed and burned :(', error);
    } else {
        // interpolation sensation using template literals
        console.log(`Serving porkymans on port: ${port}`);
    }
});

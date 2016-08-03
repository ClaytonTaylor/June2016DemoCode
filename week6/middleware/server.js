var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');

var app = express();

// speaking in code
// when you "load" middleware, it is called MOUNTING

// mounting middleware vertically
// which means this will fire for
// EVERY SINGLE REQUEST
// vertically mounting:
// app.use(bodyParser.json()) // this attaches a POST payload to `req.body`
// app.use(bodyParser.urlencoded({ extended: true }))

app.use( logger('dev') );
app.use( checkKey );
// app.use( function(req, res, next) { }) // inline-vertically-mounted middleware

app.use(function(err, req, res, next){ // error-handler
    console.error(err.stack)
    // https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
    res.status(500).send({
        status: 500,
        message: 'Hold the door!'
    })
});
//
// app.get('/', checkKey, function(req, res){ // mounting horizontally
//     res.send('Hello squirrel!');
// }) // often called the `root` of the site

app.post('*', bodyParser.json(), bodyParser.urlencoded({ extended: true })) // lighterwight way

app.get('/', function(req, res){ // mounting horizontally
    res.send('Hello squirrel!');
}) // often called the `root` of the site

// app.use( checkKey );

app.get('/api*', checkKey) // horizontally mount middleware that matches a route pattern
app.get('/api/things', function(req, res) {
    res.send({
        data: 'stuff'
    })

})
app.get('/api/stuff', function(req, res) {
    res.send({
        data: 'stuff'
    })
})

function checkKey(req, res, next) { // next, when called will fire the next middleware in the stack
    if( req.query.key ) {
        next(); // MUST ALWAYS CALL THIS, or you will hang your server :(
    } else {
        res.send({
            message: 'No api key'
        })
    }
}

// use POSTMAN to quickly test POST routes!
// https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?utm_source=chrome-ntp-icon
app.post('/', function(req, res){
    res.send({
        data: 'Some awesome data!!!'
    });
})



// console.log(process.env.PORT)

app.listen(process.env.PORT||8080, ()=>{
    console.log('Server up!');
})

// exercise: use https://www.npmjs.com/package/cookie-parser
// set a cookie on the frontend
// see it come in on the backend

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// speaking in code
// when you "load" middleware, it is called MOUNTING

// mounting middleware vertically
// which means this will fire for
// EVERY SINGLE REQUEST
// vertically mounting:
app.use(bodyParser.json()) // this attaches a POST payload to `req.body`

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', checkKey, function(req, res){ // mounting horizontally
    res.send('Hello squirrel!');
}) // often called the `root` of the site

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

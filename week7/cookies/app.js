var express = require('express')
var app = express()
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

// using cookie parser gives us access to req.cookies
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))

app.use(function(req,res,next){
    // Middleware to see what headers are being sent up
    console.log(req.headers)
    console.log('=-=-=-=-=-=-=-=')
    next()
})


app.get('/', function(req, res){
    res.send('this is the homepage.')
})

//
// ────────────────────────────────────────────────────── I ──────────
//   :::::: C O O K I E S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//



app.get('/set-cookie', function(req, res){
    res.cookie('cookie-key', 'cookie-value')
    res.cookie('cookie-keyB', 'cookie-valueB')
    res.send('the cookie was set.')
})

app.get('/temporary-cookie', function(req,res){
    res.cookie('temp-cookie', 'temp-value', {maxAge:2000})
    res.send('temporary cookie')
})


// ────────────────────────────────────────────────────────────────────────────────









//
// ──────────────────────────────────────────────────────── II ──────────
//   :::::: S E S S I O N S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────
//



var sessions = {}
app.get('/session', function(req, res){
    console.log('cookies? ', req.cookies)
    console.log('=-=-=-=-=-=-=-=')

    if ( !req.cookies.sessionID || !sessions[req.cookies.sessionID] ) {
        var sessionID = Math.random()
        sessions.someProperty
        sessions[sessionID] = { created : new Date() }
        res.cookie('sessionID', sessionID, {httpOnly : true})
        res.send(`
            <h1>Your session was created at ${sessions[sessionID].created}</h1>
        `)
    }
    else {
        var sessionID = req.cookies.sessionID
        res.send(`
            <h1>You've had an active session since ${sessions[sessionID].created}</h1>
        `)
    }
})


app.get('/sign-up', function(req, res){
    res.send(`
        <form method="POST" action="/sign-up">
            <input placeholder="username" name="username">
            <input placeholder="password" name="password">
            <input type="submit" value="SUBMIT!">
        </form>
    `)
})

app.get('/log-in', function(req, res){
    res.send(`
        <form method="POST" action="/log-in">
            <input placeholder="username" name="username">
            <input placeholder="password" name="password">
            <input type="submit" value="SUBMIT!">
        </form>
    `)
})

var users = {}
var userSessions = {}
app.post('/sign-up', function(req,res){
    console.log('users? ', users)
    if ( !(users[req.body.username]) ){
        users[req.body.username] = {
            username : req.body.username,
            password : req.body.password,
        }
        var userSessionID = Math.random()
        userSessions[userSessionID] = {username : req.body.username}
        res.cookie('userSessionID', userSessionID, {httpOnly:true})
        res.redirect('/dashboard') 
    }
    else {
        res.send(`
            <h1>ERROR</h1>
            <p>That username already exists.</p>
            <p><em>Try to be more creative</em></p>
        `)
    }
})

app.post('/log-in', function(req, res){
    if ( users[req.body.username] && req.body.password === users[req.body.username].password) {
        var userSessionID = Math.random()
        userSessions[userSessionID] = {username : req.body.username}
        res.cookie('userSessionID', userSessionID, {httpOnly : true})
        res.redirect('/dashboard')
    }
    else {
        res.send(`
            <h1>ERROR</h1>
            <p>Wrong username or password.</p>
            <p><em>Stop hacking</em></p>
        `)
    }
})

var isLoggedIn = function(req, res, next){
    if (req.cookies.userSessionID && (req.cookies.userSessionID in userSessions)){
        next()
    }
    else {
        res.redirect('/log-in')
    }
}

app.get('/dashboard', isLoggedIn, function(req,res){
    var username = users[userSessions[req.cookies.userSessionID].username].username
    res.send(`
        <h1>Welcome back, ${username}.</h1>
        <p><em>We missed you.</em></p>
    `)
})

// ────────────────────────────────────────────────────────────────────────────────



app.listen(3000)
var express = require('express'),
    app = express(),
    cookieParser = require('cookie-parser'), // req.cookies
    bodyParser = require('body-parser'); // req.body

// using cookie parser gives us access to req.cookies
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));

app.use(function(req,res,next){
    // Middleware to see what headers are being sent up
    console.log(req.headers);
    console.log('=-=-=-=-=-=-=-=');
    next();
});

app.get('/', function(req, res){
    res.send('this is the homepage.');
});

//
// ────────────────────────────────────────────────────── I ──────────
//   :::::: C O O K I E S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//



app.get('/set-cookie', function(req, res){
    // {cookie-key : cookie-value}
    res.cookie('cookie-key', 'cookie-value');
    res.cookie('cookie-keyB', 'cookie-valueB');
    res.cookie('displayMode', 'high-contrast');
    res.send('the cookie was set.');
});

app.get('/temporary-cookie', function(req,res){
    res.cookie('temp-cookie', 'temp-value', {maxAge:2000});
    res.send('temporary cookie');
});


// ────────────────────────────────────────────────────────────────────────────────









//
// ──────────────────────────────────────────────────────── II ──────────
//   :::::: S E S S I O N S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────
//



var sessions = {}; // This will be our sessions object.
// sessions are just arbitrary objects in server memory

app.get('/session', function(req, res){
    console.log('cookies? ', req.cookies);
    console.log('=-=-=-=-=-=-=-=');

    if ( !req.cookies.sessionID || !sessions[req.cookies.sessionID] ) {
        // No sessionID cookie OR no session using that sessionID cookie
        // Essentially - we can't tell who they are
        var sessionID = Math.random(); // Generate a session ID
        sessions[sessionID] = { created : new Date() }; // Storing information about the user.  Right now, just when the session was created.
        res.cookie('sessionID', sessionID, {httpOnly : true}); // Telling the browser to store the cookie.  httpOnly makes the cookie inaccessible in document.cookies
        res.send(`
            <h1>Your session was created at ${sessions[sessionID].created}</h1>
        `);
    }
    else {
        // We know who the user is!
        var sessionID = req.cookies.sessionID;
        res.send(`
            <h1>You've had an active session since ${sessions[sessionID].created}</h1>
        `);
    }
});


app.get('/sign-up', function(req, res){
    res.send(`
        <form method="POST" action="/sign-up">
            <input placeholder="username" name="username">
            <input placeholder="password" name="password">
            <input type="submit" value="SUBMIT!">
        </form>
    `);
});

app.get('/log-in', function(req, res){
    res.send(`
        <form method="POST" action="/log-in">
            <input placeholder="username" name="username">
            <input placeholder="password" name="password">
            <input type="submit" value="SUBMIT!">
        </form>
    `);
});

var users = {}; // Fake user DB
var userSessions = {}; // Session object for users.  Remember that sessions are just arbitary objects in server memory
app.post('/sign-up', function(req,res){
    console.log('users? ', users);


    if ( !(users[req.body.username]) ){
        // No User witht that username - create one
        users[req.body.username] = {
            username : req.body.username,
            password : req.body.password,
            firstTime: true
        }; // Super secure way of storing user objects
        var userSessionID = Math.random(); // Create a sessionID
        userSessions[userSessionID] = {
            username : req.body.username,
        }; // store info about the user in the userSessions object
        res.cookie('userSessionID', userSessionID, {httpOnly:true}); // Set the cookie that deals with our authentication - httpOnly is key!
        res.redirect('/dashboard') ;
    }
    else {
        // We already have a user with that name
        res.send(`
            <h1>ERROR</h1>
            <p>That username already exists.</p>
            <p><em>Try to be more creative</em></p>
        `);
    }
});

app.post('/log-in', function(req, res){
    if ( users[req.body.username] && req.body.password === users[req.body.username].password) {
        // If we have a user AND their password is correct
        var userSessionID = Math.random();
        userSessions[userSessionID] = {username : req.body.username}
        res.cookie('userSessionID', userSessionID, {httpOnly : true});
        res.redirect('/dashboard');
    }
    else {
        // SOMETHING WENT HORRIBLY WRONG!
        res.send(`
            <h1>ERROR</h1>
            <p>Wrong username or password.</p>
            <p><em>Stop hacking</em></p>
        `);
    }
})

var isLoggedIn = function(req, res, next){
    if (req.cookies.userSessionID && (req.cookies.userSessionID in userSessions)){
        // They're good, let them continue on
        next()
    }
    else {
        // Either no cookie OR cookie doesn't match an existing session
        res.redirect('/log-in')
    }
}

app.get('/dashboard', isLoggedIn, function(req,res){
    var user = users[userSessions[req.cookies.userSessionID].username]
    // var username = users[userSessions[req.cookies.userSessionID].username].username
    var message = user.firstTime ? 'Hello there, ' : 'Welcome back, '
    res.send(`
        <h1>${message} ${user.username}.</h1>
        <p><em>We missed you.</em></p>
    `)
    user.firstTime = false;
})

// ────────────────────────────────────────────────────────────────────────────────



app.listen(3000)
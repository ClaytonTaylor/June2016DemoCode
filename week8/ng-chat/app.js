var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var sessions = require('client-sessions'); // encrypted cookies!
var Routes = require('./routes');

var app = express();

mongoose.connect('mongodb://localhost/chat');


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/** Express Session Setup **/

// function makeObj (key, val){
//     var obj = {}
//     obj[key] = val
//     return obj
// }
// makeObj('city', 'Boulder')
// app.specialUserObj.sessionMiddleware

app.set('sessionMiddleware', sessions({
    cookieName: '_mean-auth', // front-end cookie name
    secret: 'DR@G0N$', // the encryption password : keep this safe
    requestKey: 'session', // req.session,
    duration: 86400, // 60 * 60 * 24 (number of seconds in a day), tells the middleware when the cookie/session should expire,
    cookie: {
        ephemeral: false,   // when true, cookie expires when browser is closed
        httpOnly: true,     // when true, the cookie is not accesbile via front-end JavaScript
        secure: false       // when true, cookie will only be read when sent over HTTPS
    }
}))

app.use( app.get('sessionMiddleware') );

// Middleware to prevent someone from going to certain pages if they are not logged in
app.set('isAuth', (req, res, next)=>{
    if(req.session.user){
        next()
    }
    else{
        res.send('Not Logged In!')
    }
})

app.set('isAuthAdmin', (req, res, next)=>{
    if(req.session.user && req.session.user.role === 'admin'){
        next()
    }
    else{
        res.send('You\'re not an admin!');
    }
})

Routes(app)



// app.listen RETURNS a server object. Normally we don't care, but we need it this time for our socket server.
app.set('server', app.listen(process.env.PORT || 3000))

var io = require("socket.io")
var loggedInUsers = {}
var socketServer = io(app.get('server'))


// express middleware
// function(req, res, next)


// socket.io middleware
// function(socket, next)  - socket object has socket.request

// This ties our socket requests to our sessions
socketServer.use(function(socket, next){
    app.get('sessionMiddleware')(socket.request, {}, next);
    // SessionMiddleware would normally only get run on express routes.  Socket routes wouldn't normally use ANY express middledware.  We want access to a user's session here so we are manually calling it to put that same session info on the socket request object.
})

// socket servers can proactively emit messages for no reason!
// setInterval(function(){socketServer.emit('chatMessage',{content:'hi!'})},400)

// the `socket` object in the callback function represents the socket connection for a single user.
socketServer.on("connection", function(socket){
    // make sure the socket connection is authenticated.  Don't want anon users in our chat room

    if ( socket.request.session && socket.request.session.user ) {
        // this is the session user!  This is the user info stored in the cookie that is decrypted by sessionMiddleware
        var socketUser = socket.request.session.user
        console.log('USER', socketUser)

        loggedInUsers[socketUser.username] = true;
        // {
        //     bob : true,
        //     jill : true
        // }
        socketServer.emit('loggedInUsers', loggedInUsers)


        socket.on('chatMessage', function(data){
            console.log('message to server!', data)
            socketServer.emit('chatMessage', {sender:socketUser.username,content:data})

            // If you wanted to save messages - maybe use a mongo collection!
            // ex : 
                // var message = new ChatMessage({'user.username': data})
                // message.save(function(){})

        })

        
        socket.join(socketUser.username)
        socket.on('whisper', function(data){
           
            socketServer.to(data.recipient).emit('whisper', {
                sender  : socketUser.username,
                content : data.content
            })
        })

        socket.on('disconnect', function(){
            console.log('user disconnected');
            loggedInUsers[socketUser.username] = false;
            socketServer.emit('loggedInUsers', loggedInUsers)

        });
    }

})

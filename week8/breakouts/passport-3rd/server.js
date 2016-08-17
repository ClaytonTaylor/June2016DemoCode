require('colors');

var express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    Routes = require('./routes'),
    path = require('path'),
    port = process.env.PORT || 3000,
    app = express();

//
// ──────────────────────────────────────────────────────────────────── I ──────────
//   :::::: P A S S P O R T   S E T U P : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────
//
var passport = require('passport');
var session = require('express-session');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

app.set('session', session({
    secret : 'keyboard cat',
    resave : true,
    saveUninitialized : true
}));
app.use( app.get('session') );

app.use( passport.initialize() ); // Hooks into app
app.use( passport.session() ); // Hooks into sessions

// cookies are strings. strings are "SERIAL" data.
passport.serializeUser(function(user, done) {
    done(null, user.id);
}); // What passport is storing on the client (cookie)
passport.deserializeUser(function(id, done) {
    done(null, id);
}); // How passport finds the corresponding user using the cookie



passport.use(new GoogleStrategy({
    clientID: '828157815943-g295mm43nmal2m684grj7cvrgp88nt64.apps.googleusercontent.com',
    clientSecret: '2XQWf7KslMt7PNeazOm0z1pZ',
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log('TOKENS', accessToken, refreshToken);
    console.log('PROFILE', profile);
    cb(null, profile)
  }
));

// ────────────────────────────────────────────────────────────────────────────────


app.use(express.static(path.join(__dirname,'public')));

// make sure you have mongod running!
// connection string: 'mongodb://localhost/<db-name>'
mongoose.connect('mongodb://localhost/heroes-of-ajax', (error) => {
    if(error) {
        console.error('Oh no, could not start mongoose!', error);
        process.exit(1); // exits a node application, anything other than 0 is considered an error
    } else {
        console.log('Mongoose started successfully.'.cyan);
    }
});

app.post('*', bodyParser.json(), bodyParser.urlencoded({ extended: true }));

Routes(app);

app.listen(port, (error)=>{
    if(error) {
        console.error('Oh no, the server could not start!', error);
        process.exit(1); // exits a node application, anything other than 0 is considered an error
    } else {
        console.log('Our heroesy server is making hero noises.'.yellow);
    }
});

var heroCtrl = require('./heroes');
var hqCtrl   = require('./hqs');

var passport = require('passport');

module.exports = (app) => {

    // Routes go here

    // Passport Routes
    app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] })); // Route that takes you to the google sign in page

    app.get('/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/dashboard');
    }); // Where google redirects you when the user is done signing in

    // Hero Routes
    app.get('/api/heroes', heroCtrl.get);
    app.post('/api/heroes', heroCtrl.upsert);
    
    // HQ Routes
    app.get('/api/hqs', hqCtrl.get); // Find Many
    app.get('/api/hqs/:id', hqCtrl.get); // Find One
    app.post('/api/hqs', hqCtrl.upsert); // Create
    app.post('/api/hqs/:id', hqCtrl.upsert); // Update
    
}

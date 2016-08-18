var Auth = require('./auth')

module.exports = (app) => {
    app.get('/', (req,res) => {
        res.sendFile('login.html', {root : './public/html'})
    });

    app.get('/chat', app.get('isAuth'), (req, res) => {
        res.sendFile('/chat.html', {root: './public/html'})
    })

    app.get('/logout', Auth.logout) // logout route + redirect

    app.post('/login', Auth.login);         // login form submission
    app.post('/register', Auth.register)    // register form submission

    
    // app.use( app.get('isAuth') ); // Vertical Middleware

    app.get('/api/me',  (req, res) => {
        // Send down the logged in user
        res.send({user:req.session.user})
    })


}

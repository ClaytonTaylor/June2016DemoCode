// routes/index.js : nice to call it a MASTER route file

// similar to the config of ui-router, ngRouter
// the Controller part of the MVC
var API = require('./api'),
    Dashboard = require('./dashboard');

console.log("API ROUTES:", API);

module.exports = function(app) {
    app.get('/', function(req, res){
        res.send('Site homepage');
    });

    // http://localhost:3000
    app.get('/api', API.get);

    // http://localhost:3000/api/user?id=1
    app.get('/api/user', API.user);

    // http://localhost:3000/api/users
    app.get('/api/users', API.users);

    // http://localhost:3000/dashboard
    app.get('/dashboard', Dashboard.home);

    // http://localhost:3000/dashboard/settings
    app.get('/dashboard/settings', Dashboard.settings);
}

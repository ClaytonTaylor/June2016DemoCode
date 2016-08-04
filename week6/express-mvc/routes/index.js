// similar to the config of ui-router, ngRouter
// the Controller part of the MVC
var API = require('./api'),
    Dashboard = require('./dashboard');

module.exports = function(app) {
    app.get('/', function(req, res){
        res.send('Site homepage');
    });
    app.get('/api', API.get);
    app.get('/api/user', API.user);
    app.get('/api/users', API.users);
    app.get('/dashboard', Dashboard.home);
    app.get('/dashboard/settings', Dashboard.settings);
}

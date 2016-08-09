var heroCtrl = require('./heroes');
// var otherCtrl = require('./other');

module.exports = (app) => {

    // Routes go here

    // Hero Routes
    app.get('/api/heroes', heroCtrl.get)
    app.post('/api/heroes', heroCtrl.upsert)
    
    
}

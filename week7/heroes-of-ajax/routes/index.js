var heroCtrl = require('./heroes');
var hqCtrl   = require('./hqs');
// var otherCtrl = require('./other');

module.exports = (app) => {

    // Routes go here

    // Hero Routes
    app.get('/api/heroes', heroCtrl.get);
    app.post('/api/heroes', heroCtrl.upsert);
    
    // HQ Routes
    app.get('/api/hqs', hqCtrl.get); // Find Many
    app.get('/api/hqs/:id', hqCtrl.get); // Find One
    app.post('/api/hqs', hqCtrl.upsert); // Create
    app.post('/api/hqs/:id', hqCtrl.upsert); // Update
    
}

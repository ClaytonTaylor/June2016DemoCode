var API = require('./api');

module.exports = (app) => {
    // app.get('/', (req, res) => {
    //     // res.sendFile(...)
    //     res.send('The server is working!');
    // });

    app.post('/api/create', API.create);
}

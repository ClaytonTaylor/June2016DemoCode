// routes/index.js : nice to call it a MASTER route file

// similar to the config of ui-router, ngRouter
// the Controller part of the MVC
var API = require('./api')

module.exports = function(app) {
    app.get('/', function(req, res){
        res.sendFile('index.html', {root : './public/html'});
    });

    // http://localhost:3000/api/book?id=1
    app.get('/api/book', API.book);

    // http://localhost:3000/api/books
    app.get('/api/books', API.books);

   // Genre Route (paramaterized)
   app.get('/api/books/:genre', API.genre);
   // /api/books/horror
   // /api/books/teenromance
   // /api/books/porkymans

   // Create Book Route
   app.post('/api/books', API.createBook);
}

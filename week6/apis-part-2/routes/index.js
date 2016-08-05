var API = require('./pallet-api'); // contoller file, an object full of route handlers

module.exports = (app) => {
    // pachirisu
    app.get('/', (req, res) => {
        res.sendFile('pallet.html', { root: app.get('publicHTML') });
    });

    app.get('/api/porkyman', API.grabAPokemon);

    // app.get('/api/porkyman/evolution', API.evolution);
}

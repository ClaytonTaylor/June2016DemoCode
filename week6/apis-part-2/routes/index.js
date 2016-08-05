module.exports = (app) => {
    // pachirisu
    app.get('/', (req, res) => {
        res.sendFile('pallet.html', { root: app.get('publicHTML') });
    });
}

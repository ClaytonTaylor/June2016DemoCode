var Library = require('../models/library');

module.exports = {
    // each property you see here is a route handler
    books : function (req, res){
        res.json( Library.findAll() )
    },

    book  : function (req, res){
        res.json( Library.findOne(req.query.id) )
    },


    // http://askjeeves.com?searchT=restaurants+near+me

    genre : function(req, res){
        // How do we get books of one genre using paramaterized URLs?
        
        // github.com/refactoru
        // github.com/devaio
        // github.com/*
        // console.log('the REAL params', req.params)
        var results = Library.findGenre( req.params.genre );
        res.json( results.length > 0 ? results : 'No Books :(' );
    },

    createBook : function(req, res){
        // How do we add a new book using data posted from the client?
        Library.addBook( req.body );
        res.status(200).send('OK');
    },
}

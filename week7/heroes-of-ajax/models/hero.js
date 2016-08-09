var mongoose = require('mongoose');

// Create a model / schema
var heroSchema = mongoose.Schema({
    name:       {type : String},
    powers:     {type : Array, default : []},
    weaknesses: {type : Array, default : []},
    // HQ:         {type : String},
    // sidekick:   {
    //     name : {type : String},
    //     caped: {type : Boolean}
    // },
    masked:     {type : Boolean, default : false},
    origin:     {type : String},
});

// export the model
module.exports = mongoose.model('Hero', heroSchema, 'heroes'); // Our entrypoint into the heroes collection in the DB
// heroes
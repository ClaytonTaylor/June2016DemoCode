// Quick review on namespacing
// console.log(global) node
// console.log(window) DOM


// var monkay; // not in global namespace
// monkey = 'Monkey' // that would get placed into global.monkey

// console.log(require); // <=== there is stuff in here

var mongoose = require('moongoose'); // creates a &pointer!

// first param = name of model,
// second param = json object describing ze SCHEMA
var Car = mongoose.model('Car', {
    make: String,
    model: String,
    year: Number,
    color: String,
    hyperDrive: Boolean,
    features: [String]
    // features: Array
});

module.exports = Car;

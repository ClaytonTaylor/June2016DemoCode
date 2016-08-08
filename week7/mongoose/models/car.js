// Quick review on namespacing
// console.log(global) node
// console.log(window) DOM


// var monkay; // not in global namespace
// monkey = 'Monkey' // that would get placed into global.monkey

// console.log(require); // <=== there is stuff in here

var mongoose = require('mongoose'); // creates a &pointer!

// first param = name of model,
// second param = json object describing ze SCHEMA
var Car = mongoose.model('Car', {
    make: String,
    model: { type: String, required: true },
    year: Number,
    color: String,
    hyperDrive: Boolean,
    // features: [String],
    timeAdded: {
        type: Number,
        default: () => {
            return Date.now(); // GMT time in milliseconds, go look it up
        }
    }
    // features: Array
});

module.exports = Car;

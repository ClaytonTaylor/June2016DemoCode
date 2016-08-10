var mongoose = require('mongoose'),
    // Schema = mongoose.Schema,
    BeerSchema = new mongoose.Schema('Beer', {
        name: String,
        IBUs: Number,
        ingredients: [String],
        price: Number,
        calories: Number,
        fluidOZ: {
            type: Number,
            default: 12
        }
    });

// Beer.pre('save', ()=>{
//
// })

module.exports = mongoose.model('Beer', BeerSchema);

// Heroes Controller

// Require the model so we can access the collection
var Hero = require('../models/hero');
// Hero => db.heroes
// Hero.find()
// db.heroes.find()


module.exports = {
    get : (req, res) => {
        // Read
        Hero.find({}, function(err, heroes){
            res.json(heroes);
        });
    },
    // /api/heroes
    // /api/heroes/:id
    // /api/heroes/53982034abdsjc893
    // /api/v2/evolution-chain/215
    upsert : (req, res) =>{
        // Create / Update
        if(req.params.id){
            // Update existing document
        }
        else {
            // No id in the url, create a new document
            var newHero = new Hero(req.body);

            // Or, if req.body doesn't match your schema - manually construct the object you pass to new Hero
            // var newHero = new Hero({
            //     name : req.body.firstName + ' ' + req.body.lastName,
            //     powers : req.body.powers.split(', '),
            //     weaknesses : someOtherObj.stuff,
                
            // })

            // Save hero to DB
            newHero.save(function(err, hero){
                if(err){
                    return res.json(err);
                }
                res.json(hero);
            });
        }

    },

    remove : (req, res) =>{
        // Delete
    }

}


// Our controller file will, at least, perform CRUD operations
// C - Create - inserting documents into the db
// R - Read   - querying, pulling things out of the db
// U - Update - modifying an existing document
// D - Delete - removes a document
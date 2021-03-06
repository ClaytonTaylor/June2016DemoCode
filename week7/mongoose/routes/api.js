var Car = require('../models/car');

module.exports = {
    create: (req, res) => {
        // a way to quickly bounce bad payloads, prefer model validation over this method
        // if( !req.body.make ) {
        //     return res.status(400).json({
        //         message: 'Bad payload'
        //     });
        // }

        var newCar = new Car(req.body);

        newCar.save( (err, data) => {
            if(err) {
                console.error('Things are not okay :('.red, err);
                res.status(500).json({
                    message: 'Your car order could not be complete :('
                });
            } else {
                console.info("Here is ze data:", data);
                res.json(data);
            }
        });
    },
    createFocus: () => {
        var newCar = new Car({
            // req.body should have a JSON payload that looks like this object
            // in order for all the things to actually factually work.
            make: 'Ford',
            model: 'Focus ST',
            year: 2014,
            color: 'Silver',
            hyperDrive: true,
            features: ['bluetooth','keyless-entry','turbo','spare-tire']
        });

        newCar.save( (err, data) => {
            if(err) {
                console.error('Things are not okay :('.red, error)
            } else {
                console.info("Here is ze data:", data);
            }
        });
    }
}

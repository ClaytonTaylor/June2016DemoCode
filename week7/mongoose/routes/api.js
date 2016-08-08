var Car = require('../models/car');

module.exports = {
    create: (req, res) => {

    },
    createFocus: (req, res) => {
        var newCar = new Car({
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
            }
        });
    }
}

// Speaking in code: "Declare a module in angular named
// 'WeddingBells' in title case and CamelCase with NO dependencies"
angular.module('WeddingBells', [])

// Speaking in code: "Reference the module WeddingBells"
angular.module('WeddingBells')
    // Speaking in code: "chain a controller named 'BallAndChain'
    // mapped to a function Eternity which takes no dependencies"
    .controller('BallAndChain', Eternity)

// Speaking in code:
    // 1. Set the $inject property on the Eternity controller function to a dependecy array including 'Splitsies'
    // 2. Inject Splitsies into Eternity using $inject
Eternity.$inject = ['divorceFactory']

// Speaking in code: [create/declare/define] a function called 'Eternity'
function Eternity(divorceFactory) {
    // Log levels
    // console.error('Eternity controller is loaded')
    // console.warn('Eternity controller is loaded')
    console.info('Eternity.controller is loaded')
    // console.debug('Eternity.controller.divorceFactory', divorceFactory)
    // console.log('Eternity controller is loaded')
    // console.debug('Eternity controller is loaded')

    // `love` on the DOM is mapping to the `this` variable within the Eternity controller
    var love = this

    // Speaking in code
    // 1. assign the property info on the love variable
    // 2. assign an info property on the scope of the Eternity controller
    love.info = divorceFactory.info

    // we won't have to redfine average age in a future controller
    // because the factory allows us to share METHODS as well as data
    love.averageAgeValue = divorceFactory.averageAge()
}

// Speaking in code: "Declare a factory named 'divorceFactory'
// on the module WeddingBells"
// Speaking in code: "Reference the module WeddingBells"
angular.module('WeddingBells')
    // Speaking in code: "register the factory 'divorceFactory'"
    .factory('divorceFactory', Splitsies)

function Splitsies() {
    console.info('Splitsies factory is loaded')
    // Speaking in code: create a collection, named data, whose SCHMEA is:
        // year with a Nuber value of 2013 and,
        // spouses with a value that is a collection with this schema...
        // duration with a Number value of 2
    var data = [{
        // couple 1
        year: 2013,
        spouses: [{
            age: 23,
            occupation: 'Dentist',
            education: 'DDS',
            gender: 'female'
        },{
            age: 43,
            occupation: 'Plumber',
            education: 'Highschool',
            gender: 'male'
        }],
        duration: 2
    },{ // couple 2
        year: 2000,
        spouses: [{
            age: 32,
            occupation: 'Burger Flipper Engineer',
            education: 'RefactorU',
            gender: 'male'
        },{
            age: 35,
            occupation: 'WNBA',
            education: 'G.E.D.',
            gender: 'female'
        }],
        duration: 5
    },{ // couple 3
        year: 1865,
        spouses: [{
            age: 20,
            occupation: 'Buggysmith',
            education: 'None',
            gender: 'male'
        },{
            age: 15,
            occupation: 'Doll Dresser',
            education: 'Mom',
            gender: 'female'
        }],
        duration: 10
    }]

    // Speaking in code:
        // return an object with property/key info that has a value of the data collection
    return {
        info: data,
        averageAge: function() {
            // Speaking in code:
                // declare a variable named initialValue with the integer value of zero
            var initialValue = 0
            // STOP WRITING FOR LOOPS

            // Speaking in code:
                // declare a variable named sum which is the
                // result of the reduction of the data array,
                // whose callback returns an element's spouses's age property
                // and uses the initialValue

            // for(...) {
            //     for(...){
            //
            //     }
            // }

            // CALLBACK HELLLLLLLL!!!
            // // don't do this!
            // var sum = data.reduce(function(overallTotal, currentCouple){
            //     return overallTotal + currentCouple.spouses.reduce(function(couplesTotal, currentSpouse){
            //         return couplesTotal + currentSpouse.age
            //     }, initialValue)
            // }, initialValue)

            // one way to avoid callback hell: NAME YOUR FUNCTIONS
            // first-class citizens : I can use a function like a variable
            var sum = data.reduce(sumCouples, initialValue);
            // outside loop
            function sumCouples (overallTotal, currentCouple) {
                return overallTotal + currentCouple.spouses.reduce(sumSpouses, initialValue)
            }
            // inside loop
            function sumSpouses(couplesTotal, currentSpouse) {
                return couplesTotal + currentSpouse.age
            }
            // hey, there are two spouses! which is why we are multiplying by 2
            return sum / (data.length*2)
        }
    }
}

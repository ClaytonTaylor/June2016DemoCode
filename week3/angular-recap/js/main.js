// Speaking in code: "Declare a module in angular named
// 'WeddingBells' in title case and CamelCase with NO dependencies"
angular.module('WeddingBells', [])

// Speaking in code: "Reference the module WeddingBells"
angular.module('WeddingBells')
    // Speaking in code: "chain a controller named 'BallAndChain'
    // mapped to a function Eternity which takes no dependencies"
    .controller('BallAndChain', Eternity)

// Speaking in code: [create/declare/define] a function called 'Eternity'
function Eternity() {
    console.info('Eternity is loaded')
}

// Speaking in code: "Declare a factory named 'divorceFactory'
// on the module WeddingBells"
// Speaking in code: "Reference the module WeddingBells"
angular.module('WeddingBells')
    // Speaking in code: "register the factory 'divorceFactory'"
    .factory('divorceFactory', Splitsies)

function Splitsies() {
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
        info: data
    }
}

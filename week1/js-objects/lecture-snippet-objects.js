// var array = []
// var array2 = [1]
// var array3 = [1,2,3,4,5]

var days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

// console.log(days[0]) // spits out monday

// days[8]='Funday' // adds Friday at the end of the array
// days[days.length]='Moonday' // adds Moonday at the end of the array
// days.push('Venusday') // add Venusday at the end of the array

// days[0]='Marsday' // overides Monday!

// days.unshift('Monday') // adds Monday back into the beginning array

// console.log(days)

// var lastDay = days.pop() // removes the last element from the
                         // array and returns it so that it
                         // can be assigned to a variable

// console.log(days, lastDay)

// never make this ugly array
// [true, 1, '', {}, Array, 23987642983461, 1e2, function(){}]

// your canonical for loop

// iterator; terminating condition; icrementor
// i--
// for( var i = 0; i < days.length; i++ ) {
//     console.log(days[i])
// }

// for( var i = days.length-1; i > 0; i-- ) {
//     console.log(days[i])
// }

// var i = days.length

// while( i > 0 ) { // going backwards
//     console.log(days[i])
//     i--
// }

// var i = 0

// while( i < days.length ) { // going backwards
//     console.log(days[i])
//     i++
// }

// var i = days.length

// while( i-- ) {
//     console.log(days[i])
// }

// for( var i =0; i < days.length; i++ ) {
//     if( days[i] === 'Saturday' ) {
//         console.log('Partaaaaaay!', days[i])
//     } else if ( days[i] === 'Sunday' ) {
//         console.log('Ugh... my head...', days[i])
//     } else {
//         console.log('work work work...', days[i])
//     }
// }

// iteration 1
//     if( days[0] === 'Saturday' ) {
//         console.log('Partaaaaaay!', days[0])
//     } else if ( days[0] === 'Sunday' ) {
//         console.log('Ugh... my head...', days[0])
//     } else {
//         console.log('work work work...', days[0])
//     }


// iteration 2
//     if( days[1] === 'Saturday' ) {
//         console.log('Partaaaaaay!', days[1])
//     } else if ( days[1] === 'Sunday' ) {
//         console.log('Ugh... my head...', days[1])
//     } else {
//         console.log('work work work...', days[1])
//     }

// iteration 3
//     if( days[2] === 'Saturday' ) {
//         console.log('Partaaaaaay!', days[2])
//     } else if ( days[2] === 'Sunday' ) {
//         console.log('Ugh... my head...', days[2])
//     } else {
//         console.log('work work work...', days[2])
//     }

// var obj = {} // an exmpty objects

// console.log({})

// the number in the square brackets is an index
// the value of days[0] is refered to as an element
// days[0]

// A shcema describes the properties of an object and the
// types of values those properties have
var donut = {
    topping: 'sprinkles',
    shape:   'twisted',
    filling: 'mayo',
    price: 6.66,
    tasteGood: false
}

// in order to access properties on an object,
// we use the `dot` notation

// console.log(donut)

// Speaking in code: when we join a string using the `+` operator
// we are `concatinating` two or more strins together

// for( var prop in donut ) {
//     console.log('Property:'+ prop +' Value:'+ donut[prop])
// }


// for( var index in days ) {
//     console.log('Index:'+ index +' element:'+ days[index])
// }

// tastesGood  // camelCase
// tastes_good // snake_case

// var obj = {},
//     array = []

// if( donut.width ) { // undefined properties on a object are falsey
//     console.log(true)
// } else {
//     console.log(false)
// }

// var obj = {}
// var someNumber = 1

// expressions
// if( /* expressions */ ) {}

// var expressionValue = 1 < 3

// if( expressionValue ) {

// }

var expressionValue2 = 1 < 3 && 4 > 5 || 6 != 7 || 9

// if( 1 < 3 && 4 > 5 || 6 != 7 || 9  )

// if( expressionValue2 ) {}

// var width = donut.width || 3 && false

// var a = donut.width

// console.log( a.pope );

// var number = 0, result;

// Speaking in code: Create a conditional comparing that variable `number` literally to zero
// if true, the variable is assigned the value true
// if false, the variable false is assigned the vale false
// if( number === 0 ) {
//     result = true
// } else {
//     result = false
// }

// Speaking in code : assign the value of a variable called `booleanValue`
// which is the result of a ternary operation comparing a variable number to value of zero
// if true the value is true
// if false the value is false

// var booleanValue = ( number !== 0 ) ? true : false;

var donuts = [{
    topping: 'sprinkles',
    shape:   'twisted',
    filling: 'mayo',
    price: 6.66,
    tasteGood: false
},{
    topping: 'frosting',
    shape:   'heart',
    filling: 'love',
    price: 0,
    tasteGood: true
},{
    topping: 'glazed',
    shape:   'tube',
    filling: 'tequila',
    price: 9.99,
    tasteGood: true
}]

// + window is a global object
//   - all variables not declared in a funciton (tomorrow's lecture)
//     are attatched to the window object

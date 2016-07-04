
// var multiply = function(a, b){
//     if (typeof a === 'number' && typeof b === 'number'){
//         return a * b
//     }
//     else { return "That's not how you multiply." }
// }
// console.log(multiply(10,4))

// console.log(multiply('dog',[]))



// var multiply = function(a, b){
//     if ( typeof b === 'undefined' ) {
//         b = a
//     }
//     return a * b
// }

// var multiply = function(a, b){

//     var b = b || a 

//     return a * b
// }

// console.log(multiply(4))
// console.log(multiply(4,6))

// console.log('hi', 4, null, 'whatever')

// in every javascript function, we have access to an object called 'arguments' which gives us access to all the arguments, even if they don't have names.
// var partyLogger = function() {
//     for ( var i = 0; i < arguments.length; i++ ) {
//         console.log(arguments[i] + '!')
//     }
// }

// partyLogger('hi', 'Im bored', 'when does the cake get here', 4, [], {})

// var person = {}
// var myFunc = function(){
//     person.myName = 'Bill'
//     var outsideStuff = null

//     var insideFunc = function(){
//         var someThingElse = 'hello'
//         console.log(outsideStuff)
//     }
//     insideFunc()
// }

// myFunc()
// console.log(person.myName)


var person = {name : 'Alice'}
var myArray = []
// myArray.push(person) // if we push this object into an array, it gives it another name, which saves it from being garbage collected below
person = 5
// console.log(myArray[0])
// at this point, there are no more names that refer to our alice object, so it gets garbage-collected

var movie = {
    title : 'The Departed',
    info : {
        genre : 'crime',
        year  : '2013'
    }
}

var movieInfo = movie.info
var movie = 10
// we lost the title, but we still have the genre and year.



// closure is an exception to garbage collection
// start would normally be garbage collected, but the counter function that we return depends on it. Therefore, start is not garbage-collected because counter has closure over it.
var counterConstructor = function(){
    var start = 0
    var counter = function(){
        console.log(start++)
    }
    return counter
}


var myCounter = counterConstructor()
var yourCounter = counterConstructor()
// console.log(start) // start is local to the counterConstructor function. we can't access it from the global namespace

myCounter()
myCounter()
myCounter()
myCounter()
myCounter()
myCounter()
yourCounter()
yourCounter()
myCounter()
yourCounter()
myCounter()



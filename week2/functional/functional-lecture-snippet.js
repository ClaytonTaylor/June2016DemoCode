// Funtional Style programming
// - immutability (changes are not made to the orginal data)
// - construction (build something new)

// Deeper into functional programming

// High Order Functions
// - functions can be passed arround, returned and assigned dataTypes
// this is referred to as being a first class citizen

// function someFunction(eventType, anotherFunction) {
//     console.log(eventType, anotherFunction)
// }

// someFunction('click', function(){})


// Statelessness: every time the function is called,
// it is as if it were called for the very first time

// Composability: both keeping your functions very
// simple and combining


// Definition: Imperative

// var chooseOne = ['charmander','bulbasaur','squirtle']

// console.log(chooseOne)

// for( var i=0; i < chooseOne.length; i++ ) {
//     chooseOne[i] = chooseOne[i].toUpperCase();
// }

// console.log(chooseOne)

// ES5 / JS5
// var capitalChooseOne = chooseOne.map(function(pokemon){
//     return pokemon.toUpperCase();
// });

// ES6 / JS6 (get used to seeing this!)
// var capitalChooseOne = chooseOne.map( pokemon => pokemon.toUpperCase() );

// console.log(chooseOne, capitalChooseOne)

// no functional! manipulates/modifies the original array
// capitalChooseOne.sort();

// console.log(chooseOne, capitalChooseOne)

// var pokemonList = [{
//        name: 'charmander'
//     },{
//        name: 'bulbasaur'
//     },{
//        name: 'squirtle'
// }]

// var crazyPokemonList = [{
//        name: 'blastoise'
//     },{
//        name: 'snorlax'
//     },{
//        name: 'dragonite'
// }]

// var findSquirtle = pokemonList.filter(function(pokemon){
//     return pokemon.name === 'squirtle'
// })

// var combinedPokemonList = pokemonList.concat(crazyPokemonList)

// console.log(pokemonList, newPokemonList)
// console.log(pokemonList, findSquirtle, combinedPokemonList)

// var numbers = [1,2,3,34,69,42,72,420]

// for( var i=0; i < numbers.length-1; i++ ) {
//     numbers[i] += numbers[i+1]
// }

// var sum = numbers.reduce(addValues, 0)

// function addValues(previousValue, currentValue){
//     return previousValue + currentValue
// }

// console.log(sum);

// var myFavoriteCar = '2016 Ford Focus ST'

// var csvCarString = myFavoriteCar.split(' ').join(',')

// console.log(myFavoriteCar, csvCarString)

// in order to be functional, you must accept at least on parameter in your function
// and return data

// var Units = {
//     human: function(attributes) {
//         return {
//             race: 'Human',
//             name: attributes.name,
//             height: attributes.height,
//             weight: attributes.weight,
//             origin: 'Earth'
//         }
//     },
//     dragoon: function(attributes) {
//         return {
//             race: 'Dragoon',
//             name: attributes.name,
//             height: attributes.height,
//             weight: attributes.weight,
//             origin: 'Dragoonus'
//         }
//     },
//     rename: function(name, unit) {
//         unit.name = name
//         return unit
//     }
// }

// var Brandino = Units.human({
//     name: 'Brandino',
//     weight: 600,
//     height: 10
// })

// console.log(Brandino)

// Get the properties of an object as an array
// var keys = Object.keys({
//     name: 'Brandon',
//     weight: 600,
//     height: 10
// })

// constructor function (ES5)

/*
    Speaking in code: define a constructor function named HumanUnit

    It accepts an argument named attributes

    It assigns the following attributes on it's scope (this)
    - `race` as the string 'Human'
    - `name` as the value of the name

*/

// function HumanUnit(attributes) {
//     // constructor functions leverage a special keyword: `this`
//     // ctrl/cmd + tab
//     this.race = 'Human'
//     this.name = attributes.name
//     this.height = attributes.height
//     this.weight = attributes.weight
//     this.origin = 'Earth'
// }

// HumanUnit.prototype = {
//   talk: function(string) {
//     console.log(this.name, 'says:', string);
//   }
// }


// ES6
// class HumanUnit {
//     constructor(attributes) {
//         this.race = 'Human'
//         this.name = attributes.name
//         this.height = attributes.height
//         this.weight = attributes.weight
//         this.origin = 'Earth'
//     }
//     talk(string) {
//         console.log(this.name, 'says:', string);
//     }
// }


// *instatiating* a new Human
// var Brandon = new HumanUnit({
//     name: 'Brandon',
//     height: 5.9,
//     weight: 155
// }) // this is called an instance of a HumanUnit

// var Tony = new HumanUnit({
//     name: 'TonyLocke',
//     weight: 2000,
//     height: 20
// })

// var anon = function() {}

// function nonAnon() {}

// query selectors in JS are just like selectors in CSS
// 'div.boxes p'

// document.querySelector('.something-awesome')
//     .addEventListener('click', clickBatman)

// function clickBatman(event){
//     coensole.log(event)
// }

// function Person(name) {
//    this.name = name;
// }

// overriding a native method
// Person.prototype.toString = function() {
//     console.log(this.name)
//     console.info(arguments)
// }

// Array.prototype.slice.call(arguments)
// var person = new Person('Jimi Hendrix');
// var array = Array()


// var myImgs = document.querySelectorAll('img')

function Bear( attrs ) {
    this.species = attrs.species
    this.weight = attrs.weight
    this.fuzziness = attrs.fuzziness
    this.clawLength = attrs.clawLength
    this.cuddliness = attrs.cuddliness
    this.commerialValue = attrs.commerialValue
}

Bear.prototype = {
    sleep: function() {
        console.log('ZZZzzzzZZzzzz')
    },
    fart: function() {
        console.log('PPfffftt')
    },
    maul: function(dmg) {
        console.log('This bear has caused ', (dmg||9000), 'damage')
    },
    hug: function() {
        console.log('I feel warm and fuzzy <3')
    },
    climb: function(height) {
        console.log('This bear is at an elevation of:', (height||0) +'ft')
    }
}

function Panda(attrs) {
    if( !attrs ) {
        attrs = {}
    }
//     attrs = attrs || {}
    this.species = 'panda'
//     if( !attrs.weight ) { // crappy way :(
//         this.weight = 2000
//     } else {
//         this.weight = attr.weight
//     }
    this.weight = attrs.weight || 2000
    this.fuzziness = attrs.fuzziness
    this.clawLength = attrs.clawLength || '40cm'
    this.cuddliness = attrs.cuddliness || 10000
    this.commerialValue = attrs.commerialValue || true
}

// assignment by reference
// Panda.prototype = Bear.prototype // don't do this!!!
Panda.prototype = Object.create(Bear.prototype) // this is the correct way to copy a prototype

// delete Panda.prototype.maul // delete sucks!
// Panda.prototype.maul = undefined

var Yogi = new Bear({
    species: 'cartoon',
    weight: 1000,
    fuzziness: 'wuzzy',
    clawLength: '90cm',
    cuddliness: 2000,
    commerialValue: true
})

var KungFuPanda = new Panda({
    weight: 1000,
    fuzziness: 'wuzzy',
    clawLength: '90cm',
    cuddliness: 2000,
    commerialValue: true
})

try {
    KungFuPanda.scratch()
} catch ( error ) {
    console.error('No scratch!')
}

Panda.prototype.scratch = function() {
// Bear.prototype.scratch = function() {
    console.log('Scraaaaaaaaaaaaaatch')
}

var JuiJitSuPanda = new Panda()

// JuiJitSuPanda.scratch()
// KungFuPanda.scratch()
// Yogi.scratch()

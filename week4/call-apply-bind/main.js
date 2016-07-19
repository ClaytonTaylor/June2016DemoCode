// Call, Apply, Bind

// Call, Apply, and Bind are typically used to manipulate the value of THIS

	// THIS normally refers to host object

var alice = {
	name : "Alice",
	eatWeirdCake : function(){
		return this.name + ' ate a weird cake...'
	},
}
var name = 'BillyBob';
// var cakeEat = alice.eatWeirdCake
// var cakeEat = alice.eatWeirdCake.bind(alice);



// Call
var andrew = {
	name : 'Andrew',
	throwCoconuts : function(num){
		console.log(arguments);
		num = num || 4;
		// console.log(this);
		return this.name + " is throwing "+ num + " coconuts!  Watch out!"
	}
}

var awesomeO = {
	name : 'Awesome-O'
}

// Call method can be used to change the context of a function (THIS)

// andrew.throwCoconuts.call(awesomeO);

// // Call can also be used to pass in arguments
andrew.throwCoconuts.call(awesomeO, 54);

// function logEm () {
// 	// console.log(arguments);

// 	// Array.prototype.forEach.call(arguments)
// 	[].forEach.call(arguments, function(arg, index, array){
// 		// arg = arguments[i]
// 		// arg in arguments

// 		console.log(arg, index);
// 	})

// }

// logEm(1, 'dog', 'captain puddin paws', null);

// // ForEach internals
// function forEach (someFunction){
// 	for (var i = 0; i < array.length; i++) {
// 		someFunction(array[i], i, array);
// 	}
// }


// Apply
// Apply works almost identically to call
// Big difference : 
//       Call needs comma separated arguments to pass to the function
//       Apply needs an array of arguments to pass to the function

// Math.max(1, 45, 212, 6, 77);

var values = [1, 45, 212, 6, 77];
Math.max.apply(null, values);

Math.max.call(null, 1, 45, 212, 6, 77);

// Bind
// Bind is a method called on functions (like call and apply)
// Bind will create a NEW function with a custom THIS value and arguments pre-passed in

andrew.superviseCoconuts = andrew.throwCoconuts.bind(awesomeO, 12);
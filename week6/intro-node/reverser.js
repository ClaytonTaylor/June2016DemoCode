// CHALLENGE

// Create a node file that accepts a string as an argument, reverses it, and then console logs it

var word = process.argv[2];

console.log( 
	word
		.split('')
		.reverse()
		.join('') 
);
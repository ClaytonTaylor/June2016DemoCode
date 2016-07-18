// CHALLENGE I
//	1. Create a class / constructor
//			- House class
//				- size
//				- bedrooms
//				- stories
//				- bathrooms
//	2. Construct 2 instances of the House class, log the results
//
// ================================ \\

function House (size, bedrooms, stories, bathrooms){

	this.size = size;
	this.bedrooms = bedrooms;
	this.stories = stories;
	this.bathrooms = bathrooms;
}

console.log( new House(1200, 1, 6, 0.5) );
console.log( new House(5600, 35, 1, 105) );


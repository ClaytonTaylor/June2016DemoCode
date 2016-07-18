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

function House (size, bedrooms, stories, bathrooms, value){

	this.size = size;
	this.bedrooms = bedrooms;
	this.stories = stories;
	this.bathrooms = bathrooms;
	this.value = value;
}
House.prototype.depreciate = function(amt){
	this.value -= amt;
	// this.value = this.value - amt;

	// if(this.value <= 0){
	// 	return 'Demo time!'
	// }
	// else{
	// 	return 'New Value : ' + this.value
	// }

	return this.value <= 0 
		? 'Demo Time!' 
			: 'New Value : ' + this.value

	// CONDITIONAL ? TRUE VALUE : FALSE VALUE
}
var studioTower = new House(1200, 1, 6, 0.5, 800000);
var superMansion = new House(5600, 35, 1, 105, 50000000);


// ========================== \\

// CHALLENGE II

// 1. Add a 'value' property to the House class (DONT FORGET TO UPDATE YOUR INSTANCES)
// 2. Create a prototype method called
// 		- depreciate
//		- This method should decrement a house's value by an amount specified as an argument
// 3. If a houses value falls below 0, log a message describing the demolition happening
// Object Oriented Programing
//		Programming model based on the creation and manipulation of objects

// Why is it a good thing?
	//  - Communication Flow
			// - Allows better data / functionality abstraction
			// -  ORGANIZATION

// Objects have PROPERTIES
//     - Stores : primitive types, non-primitive types
//     - Also store METHODS (callable properties)
//			- Functions


// Within OOP we use the concept of CLASSES
// A CLASS is like a blueprint for an object

// CAT class
// name
// lives
// color
// hp
// hairLength


// Declaring our data in this manner dirties up the global namespace and it very difficult to maintain
// var name = "frank"
// var lives = 9

// var name2 = "alice"
// var lives2 = 5

// Instead we could create a CLASS to CONSTRUCT cat objects (more maintainable, fewer variables)

// Old, higher usage Syntax
function Cat (name, lives, color, hp, hairLength) {

	// We will attach information to the THIS object
	// When we are using a function as a CONSTRUCTOR, THIS represents the object being constructed

	this.name 		= name;
	this.lives 		= lives;
	this.color 		= color;
	this.hp 		= hp;
	this.hairLength = hairLength;
}

var rob = new Cat('Rob', 1, 'Purple', 50, 'Long');
var captainPuddinPaws = new Cat('Captain Puddin` Paws', 9, 'Tapioca', 200, 'No Hair');

// When we use the new keyword on a class constructor, we are creating new INSTANCES of a CLASS  - INSTANCES are the CONSTRUCTED objects


// the NEW keyword allows us to call functions as CONSTRUCTORS

// as a CONSTRUCTOR (new keyword)
//		- THIS starts off as an empty object {}
// 		- There is an implicit return of THIS

// NORMALLY (no new keyword)
//		- THIS refers to the object the function is attached to (or being called off of)




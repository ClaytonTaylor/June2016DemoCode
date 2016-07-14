angular.module('CakeApp')
	.factory('CheesecakeFactory', CheesecakeFactory)

function CheesecakeFactory (){
	var menuItems = []

	// Factories REQUIRE a return statement
	// Whatever you RETURN, is EXACTLY what you get access to in your controllers
	// 99% of the time, your Factories will return OBJECTS

	// Exporting data on an OBJECT will make your life much easier.
    // If you're always expecting the factory to be an object,
    // you can add/remove properties from the object WITHOUT having to
    // change code you've already written (for the most part)

    // Array
	// return menuItems

    // VS

    // Object

	// return {
	//	menuItems : menuItems,
	//  suppliers : []
	//}

	// the ONLY information you can get out of a factory is what you RETURN
	return { menuItems : menuItems }
}

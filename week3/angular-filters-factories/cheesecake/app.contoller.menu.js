angular.module('CakeApp')
	.controller('Menu', Menu)

Menu.$inject = ['CheesecakeFactory']

function Menu (CheesecakeFactory) {
    // console.log('Menu:', this);
    // console.log('Menu:CheesecakeFactory', CheesecakeFactory);

	this.greeting = "Ain't no pound cake around here!"
    this.newMenuItem = {}

	// exposing a piece of CheesecakeFactory to the view
	this.items = CheesecakeFactory.menuItems;

    // adds a new item to the menu
    this.newItem = function() {
        this.items.push(this.newMenuItem)
    }
}

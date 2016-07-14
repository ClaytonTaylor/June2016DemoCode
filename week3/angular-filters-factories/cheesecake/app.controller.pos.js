angular.module('CakeApp')
	.controller('PointOFSale', ['CheesecakeFactory', POSController])

function POSController (CheesecakeFactory) {
	this.greeting = "Let's sell some cake!";
	this.menuItems = CheesecakeFactory.menuItems;

    // console.log('POSController:', this);
    // console.log('POSController:CheesecakeFactory', CheesecakeFactory);
}

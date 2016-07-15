angular.module('CakeApp')
	.factory('CheesecakeFactory', CheesecakeFactory)

function CheesecakeFactory() {
    console.log('CheesecakeFactory Loaded')

    var menuItems = [{
        name: 'Egg Roll',
        calories: 6000,
        deliciousness: 3,
        flavor: 'Southwestern',
        price: 50
    },{
        name: 'Strawberry Cheesecake',
        calories: 1500,
        deliciousness: 9,
        flavor: 'Vanilla',
        price: 9.95
    },{
        name: 'Turtle Cheesecake',
        calories: 1800,
        deliciousness: 10,
        flavor: 'Chocolate Turtle',
        price: 13
    }]

    var menuTitle = "Lunch & Dessert"

    // whatever you share, you will return in your factory
    return {
        menuItems: menuItems,
        title: menuTitle
    }
}

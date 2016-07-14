angular.module('CakeApp')
	.controller('MenuController', MenuController)

MenuController.$inject = ['CheesecakeFactory']

function MenuController(CheesecakeFactory) {
    console.info('MenuController:CheesecakeFactory', CheesecakeFactory)

    var Menu = this

    Menu.title = 'Awesome sawce'
    Menu.items = CheesecakeFactory.menuItems
}

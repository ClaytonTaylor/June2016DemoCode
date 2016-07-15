angular.module('CakeApp')
	.controller('MenuController', MenuController)

MenuController.$inject = ['CheesecakeFactory']

function MenuController(CheesecakeFactory) {
    console.info('MenuController:CheesecakeFactory', CheesecakeFactory)

    var Menu = this

    Menu.title = 'Awesome sawce'
    Menu.search = '' // nice to have, better semantically

    // assigned by refernce
    Menu.items = CheesecakeFactory.menuItems

    /*
        [{ value: 4},{vaule:3},{value:6},{value:10}].filter(function(item){
          return item.value > 5
        })
    */

    Menu.lowCalories = function(item) {
        return item.calories < 2000
    }
}

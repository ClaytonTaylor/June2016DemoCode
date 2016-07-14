angular.module('CakeApp')
    .controller('MenuOrderController', [
        'CheesecakeFactory',
        MenuOrderController
    ])

function MenuOrderController(CheesecakeFactory) {
    console.info('MenuOrderController:CheesecakeFactory', CheesecakeFactory)

    var MenuOrder = this;

    // assigning by reference
    MenuOrder.items = CheesecakeFactory.menuItems

    MenuOrder.removeLastItem = function() {
        // console.log(MenuOrder)

        MenuOrder.items.pop()

        console.info(CheesecakeFactory.items)
    }
}

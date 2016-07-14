angular.module('CakeApp')
    .controller('MenuOrderController', [
        'CheesecakeFactory',
        MenuOrderController
    ])

function MenuOrderController(CheesecakeFactory) {
    console.info('MenuOrderController:CheesecakeFactory', CheesecakeFactory)
}

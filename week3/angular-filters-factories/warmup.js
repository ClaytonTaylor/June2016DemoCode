angular.module('CakeApp', [])

angular.module('CakeApp')
    .controller('MenuController', MenuController)
    .controller('MenuOrderController', MenuOrderController)

function MenuController() {
    console.info('MenuController loaded')
}

function MenuOrderController() {
    console.info('MenuOrderController loaded')
}

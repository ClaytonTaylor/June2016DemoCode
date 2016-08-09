angular.module('HeroesOfAjax')
    .controller('heroesController', heroCtrl)

heroCtrl.$inject = ['apiFactory']

function heroCtrl (apiFactory){
    var hCtrl = this;
    console.log(apiFactory)
}
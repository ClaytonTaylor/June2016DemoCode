angular.module('HeroesOfAjax')
    .controller('heroesController', heroCtrl)

heroCtrl.$inject = ['apiFactory']

function heroCtrl (apiFactory){
    var hCtrl = this;
    hCtrl.newHero = {
        powers     : [''], // starting with an empty array element so the ngRepeat will show HTML
        weaknesses : ['']
    };

    hCtrl.retrieveHeroes = function(){
        apiFactory
            .getHeroes()
            .then(function(response){
                hCtrl.heroList = response.data;
            })
    }
    hCtrl.retrieveHeroes();
    // console.log(apiFactory)

    hCtrl.makeAHero = function () {
        apiFactory
            .createHero(hCtrl.newHero)
            .then(function(response){
                console.log(response);
                hCtrl.retrieveHeroes();
            });
    }

    hCtrl.pwExtra = function (which) {
        hCtrl.newHero[which].push('');
    }

}
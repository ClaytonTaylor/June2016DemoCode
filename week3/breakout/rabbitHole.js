// Create a module to be injected
angular.module('RabbitHole', []);
// Modules can ONLY take other modules as dependencies


// Controllers can take Factories & Services as dependencies
angular.module('RabbitHole')
    .controller('whiteRabbit', [
        '$http',
        whiteRabbitCtrl
    ]);

function whiteRabbitCtrl ($http) {
    console.log('its working!', $http)
    var wrCtrl = this;
    wrCtrl.message = "I'm late! I'm late!";
    
    wrCtrl.eatWeirdCake = function(e){
        console.log('Alice eats a weird cake!  Yum?');
        console.log(e);
    }

    wrCtrl.showFlavor = function(e){
        console.log(wrCtrl.cakeFlavor, e);
        if(e.which === 13){
            console.log('Great Flavor brah!')
        }
    }

    wrCtrl.weirdPotions = [
        'Blue',
        'Pink',
        'Chartreuse'
    ];
    wrCtrl.drinkWeirdPotion = function(potion){
        console.log('Alice drinks the weird ' + potion + ' potion!');

        var potionIndex = wrCtrl.weirdPotions.indexOf(potion);

        wrCtrl.weirdPotions.splice(potionIndex, 1, "Red", "Floursecent Brown"); // Removing an array element
        //wrCtrl.weirdPotions[potionIndex] += 'GULP!'; // chaging values on an array element

        // One Step
        // wrCtrl.weirdPotions.splice(wrCtrl.weirdPotions.indexOf(potion), 1)
    }
}


// angular.module('MyAngularLibrary', [])
// // Lots of stuff
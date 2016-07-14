angular.module('SuperHeros', [])
    .controller('TheAvengers', avengersController)

function avengersController() {
    this.title = "Every team needs a captain!"
    this.newAvenger = ''
    this.heroes = ['Captain America', 'Iron Man', 'Thor']

    this.addNewHero = function() {
        this.heroes.push(this.newAvenger)
    }
}

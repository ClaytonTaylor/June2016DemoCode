// console.log('Working');

// Closures

var person = {
    name : "JigglyPuff",
    data : {
        powers : 'Sleep'
    }
};

jigglyData = person.data;
person = null;

// Closure is essentially taking advantage
// of garbage collection.  It's creating EXCEPTIONS

function playerMaker (){
    var health = 100;
    var bigGiganticArray = [];
    return function(dmg){
        health -= dmg;
        
        console.log('Player has ' + health + ' HP left!');
        console.log(bigGiganticArray)
    }
}
var bill = playerMaker();
// health cannot be garbage collected because BILL has a reference to it
// BILL has CLOSURE over health

var steve = playerMaker();
// Steve has CLOSURE over health, but it's their OWN INSTANCE of that health variable

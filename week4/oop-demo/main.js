function Burglar(name){
    this.name = name
    this.dead = false
    this.stuff = [ 'baseball bat', 'burgers', 'second identity', 'money', 'skeleton key' ]
}


// var alice = new Burglar('Alice')
// console.log('alice? ', alice)

Burglar.prototype.steal = function(victim){
    if ( victim.stuff.length !== 0 ) {
        this.stuff.push(victim.stuff.pop())
        console.log(this.name + ' now has ' + this.stuff.join(', ') + '.')
        console.log(victim.name + ' now has ' + victim.stuff.join(', ') + '.')
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=')
    }
    else {
        victim.dead = true
        console.log('hasta la vista, ' + victim.name)
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=')
    }
}

// var alice = new Burglar('Alice')
// var bob   = new Burglar('Bob')

// alice.steal(bob)


var cityOfThieves = []

for ( var i = 0; i < 10; i++ ) {
    cityOfThieves.push(new Burglar('person' + i))
}


var randomTheft = function(){
    var burglar = cityOfThieves[Math.floor(Math.random() * cityOfThieves.length)]
    var victim  = cityOfThieves[Math.floor(Math.random() * cityOfThieves.length)]
    if ( burglar !== victim ) {
        burglar.steal(victim)
    }
}


// var intervalID = setInterval(function(){
//     console.log('stuff')
// }, 1000)


var thievingInterval = setInterval(function(){
    cityOfThieves = cityOfThieves.filter(function(thief){
        if ( thief.dead  ) { return false }
        if ( !thief.dead ) { return true  }
        // return !thief.dead
    })
    if ( cityOfThieves.length > 1 ) {
        randomTheft()
    }
    else {
        console.log(cityOfThieves[0].name + ' says: There can be only one.')
        clearInterval(thievingInterval)
    }


}, 2)



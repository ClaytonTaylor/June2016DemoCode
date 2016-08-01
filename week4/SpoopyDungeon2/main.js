

var bottles;
for (i = 99; i >=1; i-=1) 
{
if (i ===1) {
bottles ="bottle";
}
else {
bottles = "bootles";
}
console.log (i+ " "+bottles+" of beer on the wall.");
if (i < 99) {
console.log ("");
console.log (i+ " "+bottles+" of beer on the wall.");
}
console.log(i+" "+bottles+" of beer on the wall.");
}
console.log(i+ " "+bottles+" of beer.");
console.log("Take one down.");
console.log("Pass it around.");
if (i === 1) 
{
console.log(i+" "+bottle+" of beer.");
console.log("Take it down.")
console.log("Pass it around");
{
if(i===0)
// }
{
console.log ("There are no bottles left ");
console.log("Time to go to the store");
console.log("Who is the most sober?");
}
}
}

console.log ("~Joshua Porter");
angular.module('SpoopyDungeon', []);

angular.module('SpoopyDungeon')
    .factory('DungeonFactory', dungeonFactory)

// Dungeon Factory
function dungeonFactory (){

    // Define my constructors and data arrays
    var rooms = [];
    var players = [];
    var monsters = [];

    function Player(playerInfo){
        this.name  = playerInfo.name;
        this.class = playerInfo.class;
        this.maxhp = playerInfo.maxhp;
        this.hp    = playerInfo.hp;
        this.level = 1;
        this.exp   = 0;
        players.push(this);
    }
    function Monster(monsterInfo){
        this.type  = monsterInfo.type;
        this.maxhp = monsterInfo.maxhp;
        this.hp    = monsterInfo.hp;
        monsters.push(this);
    }

    // Normal Syntax
    // function Room(roomInfo){
    //     this.description = roomInfo.description;
    //     this.items   = roomInfo.items;
    //     this.monster = roomInfo.monster;
    //     this.player  = roomInfo.player
    //     rooms.push(this);
    // }

    // ES6 Syntax
    class Room {
        constructor(roomInfo){
            this.description = roomInfo.description;
            this.items   = roomInfo.items;
            this.monster = roomInfo.monster;
            this.player  = roomInfo.player
            rooms.push(this);
        }
    }

    // You Could Optionally Generate Seed Data!
    // new Monster()

    // Could hold banks of data for random choosings
    var monsterTypes = [
        'Kobold',
        'Beholder',
        'Skeltals',
        'Spoopy Skeltals',
        'Snerks',
        'Undead Telemarketers',
        'Mr. Skeltal',
        'Gnoll',
        'Goblin',
        'Troll',
        'Zombie',
        'Porkyman',
    ]

    var itemList = [
        'Gold',
        'Potion',
        'Key',
        'Food',
        'Water',
        'Lockpick',
        'Porkyball',
    ]

    var roomDescriptions = [
        'This room sucks! It smells bad and everything!',
        'This room is awesome! Phat l00tz galore!',
        'This room is pretty terrible!',
        'This room seems familiar for some reason!',
        'This room reminds you of a big pile of crap!',
    ];

    var titles = [
        
    ];


    return {
        // Constructors
        Player  : Player,
        Monster : Monster,
        Room    : Room,

        // Arrays
        rooms   : rooms,
        players : players,
        monsters: monsters,
        monsterTypes : monsterTypes,
        itemList: itemList,
        roomDescriptions: roomDescriptions
    }
}



// Dungeon Controller
angular.module('SpoopyDungeon')
    .controller('DungeonController', [
        'DungeonFactory', 
        '$interval',
        dungeonController
    ])

function dungeonController (DungeonFactory, $interval){
    var dCtrl = this;
    window.dCtrl = dCtrl;
    dCtrl.players = DungeonFactory.players;
    // console.log('!', DungeonFactory)

    // Creating a new player
    dCtrl.createPlayer = function(){
        new DungeonFactory.Player( dCtrl.newPlayer );
        console.log(DungeonFactory.players);

        // Choose the most recently created player
        dCtrl.currentPlayer = DungeonFactory.players[DungeonFactory.players.length - 1];
        dCtrl.currentPlayer.name = dCtrl.currentPlayer.name + " " + romanize(DungeonFactory.players.length);
        dCtrl.currentPlayer.maxhp = 100;
        dCtrl.currentPlayer.hp = dCtrl.currentPlayer.maxhp;

        var monsterAttackSpeed = Math.floor(Math.random()*1000)+1000;
        //var monsterAttackSpeed = Math.floor(Math.random()*2000)+1000;
        console.log("Monster attack speed: " + monsterAttackSpeed);

        // start attacking
        dCtrl.playerAttack = $interval(dCtrl.attackMonster, 500);
        dCtrl.monsterAttack = $interval(dCtrl.attackPlayer, monsterAttackSpeed);

        // Make a room!
        dCtrl.nextRoom();
    }

    // This function will be used quite a bit, Every time the player moves into a room, we need to create that room as well as items and a monster
    dCtrl.nextRoom = function(){
        console.log("Creating a new room!");
        var monsterMaxHp = Math.ceil( Math.random() * 100 );

        // create a random monster
        var monster = new DungeonFactory.Monster({
            type : DungeonFactory.monsterTypes[ Math.floor(Math.random() * DungeonFactory.monsterTypes.length)],
            maxhp: monsterMaxHp,
            hp   : monsterMaxHp,
        });

        // determine room items
        var roomItems = [];
        var maxItems = Math.floor(Math.random()*3)+1;
        console.log("Max number of items: " + maxItems);
        for(var i = 0; i < maxItems; i++)
        {   
            var newItemNum = Math.floor(Math.random() * DungeonFactory.itemList.length);

            // prevent duplicates
            // if(roomItems.indexOf(DungeonFactory.itemList[newItemNum]) == -1)
            // {
            //     console.log("Added item num " + newItemNum);
            //     roomItems.push(DungeonFactory.itemList[newItemNum]);
            // }
            // else
            // {
            //     console.log("Duplicate item! Nothing added!");
            // }

            roomItems.push(DungeonFactory.itemList[newItemNum]);
        }

        // determine room description
        var roomDesc = DungeonFactory.roomDescriptions[ Math.floor(Math.random() * DungeonFactory.roomDescriptions.length)];

        // construct new room
        var room = new DungeonFactory.Room({
            description : roomDesc,
            items : roomItems,
            monster : monster,
            player : dCtrl.currentPlayer,
        })

        dCtrl.currentRoom = room;

    }

    // player attacks monster
    dCtrl.attackMonster = function(){
        //console.log("Attacking monster!");

        // hit
        if(Math.random() > 0.1)
        {
            var dmg = Math.floor(Math.random() * 20) + 1;
            console.log(dCtrl.currentPlayer.name + " attacked for " + dmg + " damage!");

            // check if hit will kill monster
            if(dCtrl.currentRoom.monster.hp - dmg <= 0)
            {
                dCtrl.currentRoom.monster.hp = 0;

                // player leveled up
                if(dCtrl.currentPlayer.exp + dCtrl.currentRoom.monster.maxhp >= 100)
                {
                    dCtrl.currentPlayer.level++;
                    dCtrl.currentPlayer.exp = 0;
                }
                // player did not level up
                else
                {
                    // increase player exp
                    dCtrl.currentPlayer.exp += dCtrl.currentRoom.monster.maxhp;
                }
            
                // monster died
                dCtrl.nextRoom();
            }
            else
            {
                // decrememnt monster hp
                dCtrl.currentRoom.monster.hp -= dmg;
            }

            
        }
        // miss
        else
        {
            console.log(dCtrl.currentPlayer.name + " missed!");        
        }
    }

    // monster attacks player
    dCtrl.attackPlayer = function(){
        //console.log("Attacking player!");

        // hit
        if(Math.random() > 0.1)
        {
            var dmg = Math.floor(Math.random() * 3) + 5;
            console.log(dCtrl.currentRoom.monster.type + " attacked for " + dmg + " damage!");

            // decrememnt monster hp
            //dCtrl.currentPlayer.hp -= dmg;

            // check if hit will kill player
            if(dCtrl.currentPlayer.hp - dmg <= 0)
            {
                dCtrl.currentPlayer.hp = 0;

                // player died
                $interval.cancel(dCtrl.playerAttack);
                $interval.cancel(dCtrl.monsterAttack);

                // display retry button
            }
            else
            {
                // decrememnt player hp
                dCtrl.currentPlayer.hp -= dmg;
            }
        }
        // miss
        else
        {
            console.log(dCtrl.currentRoom.monster.type + " missed!");        
        }
    }

    function romanize(num) {
        var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
        for ( i in lookup ) {
            while ( num >= lookup[i] ) {
                roman += i;
                num -= lookup[i];
            }
        }
        return roman;
    }

}
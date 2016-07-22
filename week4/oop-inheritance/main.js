// // Wizard Constructor
// function Wizard (name, powers, beardLength) {
// 	this.name        = name;
// 	this.powers      = powers;
// 	this.beardLength = beardLength;
// }

// Wizard.prototype.castSpell = function(spellIndex){
// 	return `${this.name} casts ${this.powers[spellIndex]}!`
// }

// Wizard.prototype.growBeard = function(){
	// this.beardLength++
	// return `${this.name} grows their beard! It now has a length of ${this.beardLength}!`
// }

// var smandalf = new Wizard(
// 	'Smandalf the Smug', 
// 	[
// 		'Smug Storm',
// 		'Smug Punch'
// 	],
// 	6
// );


// function Necromancer (name, powers, beardLength, minionType) {
// 	var newNecro = this;
// 	// Using the call method allows us to utilize code we've already written.
// 	// By invoking the Wizard function and forcing conext (Necromancer's THIS) we can re-use code without copy/pasting the Wizard constructor into our Necromancer constructor
	// Wizard.call(newNecro, name, powers, beardLength);

// 	newNecro.minionType  = minionType;
// }

// // First thing I need to do, is allow the Necromancer Prototype to look at the Wizard prototype
// // Necromancer.prototype = Wizard.prototype // This would create 2 variables pointing to the SAME object, the WIZARD PROTO.  I wouldn't be able to Necromancers their own methods

// Necromancer.prototype = new Wizard(); // This will make the Necromancer prototype a Wizard, which has access to the Wizard Prototype
// Necromancer.prototype.constructor = Necromancer; // Reset the constructor so we have the proper reference to it

// Necromancer.prototype.raiseMinion = function(){
// 	return `${this.name} raises several ${this.minionType} from the dead...`
// }

// // Override the Wizard version of castSpell to make more necromancery
// // This would intercept the call of castSpell.  It would fire when it reaches the Necromancer Prototype and not continue on to the Wizard Prototype
// // Necromancer.prototype.castSpell = function(spellIndex){
// // 	return `${this.name} casts ${this.powers[spellIndex]}!  It's so super necromancery...`
// // }

// var wade = new Necromancer(
// 	'Wade',
// 	[
// 		'Force',
// 		'Raise Undead',
// 		'Pestilence',
// 		'Bone Armor'
// 	],
// 	0.5,
// 	'Ewok Skeletons'
// );






// ========== ES6! ============ \\

class Wizard{
	constructor(name, powers, beardLength) {
		this.name        = name;
		this.powers      = powers;
		this.beardLength = beardLength;
	}
	castSpell(spellIndex){
		return `${this.name} casts ${this.powers[spellIndex]}!`
	}
	growBeard(){
		this.beardLength++
		return `${this.name} grows their beard! It now has a length of ${this.beardLength}!`
	}
}

var smandalf = new Wizard(
	'Smandalf the Smug', 
	[
		'Smug Storm',
		'Smug Punch'
	],
	6
);


class Necromancer extends Wizard{
	constructor(name, powers, beardLength, minionType){
		super(name, powers, beardLength); // Call the Wizard constructor
		this.minionType = minionType;
	}
	raiseMinion(){
		return `${this.name} raises several ${this.minionType} from the dead...`
	}
	castSpell(spellIndex){
		
		var spellString = super.castSpell(spellIndex);

		return `${spellString} \n It's super necromancery!`
	}
}
var wade = new Necromancer(
	'Wade',
	[
		'Force',
		'Raise Undead',
		'Pestilence',
		'Bone Armor'
	],
	0.5,
	'Ewok Skeletons'
);

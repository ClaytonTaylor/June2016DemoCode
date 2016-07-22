// Wizard Constructor
function Wizard (name, powers, beardLength) {
	this.name        = name;
	this.powers      = powers;
	this.beardLength = beardLength;
}

Wizard.prototype.castSpell = function(spellIndex){
	return `${this.name} casts ${this.powers[spellIndex]}!`
}

var smandalf = new Wizard(
	'Smandalf the Smug', 
	[
		'Smug Storm',
		'Smug Punch'
	],
	6
);


function Necromancer (name, powers, beardLength, minionType) {
	var newNecro = this;
	// Using the call method allows us to utilize code we've already written.
	// By invoking the Wizard function and forcing conext (Necromancer's THIS) we can re-use code without copy/pasting the Wizard constructor into our Necromancer constructor
	Wizard.call(newNecro, name, powers, beardLength);

	newNecro.minionType  = minionType;
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
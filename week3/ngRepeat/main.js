// Create a module
angular.module('PokeApp', []);

// Create a controller
angular.module('PokeApp')
	.controller('PallettTown', [
		// '$scope', 
		// '$http', 
		pallettCtrl
	]);

// Our Controller Function
function pallettCtrl () {
	// this -> {} ~ Very similar to $scope
	// arguments

	// Every function has a value of this
	// the THIS from our controller function will be the THIS to expose data to the view
	var pCtrl = this;

	pCtrl.welcomeMessage = "Gotta Catch'em All!";

	// this - different from the myFunc this
	// function myFunc () {
	// 	this -  different from controller's this
	// }


	// ngRepeat is an angular directive that is used for CLIENT-SIDE templating
	// TEMPLATING - generating DOM content from data using a placeholder or blueprint

	pCtrl.pokemon = [
		'Charmander2',
		'Bulbasaur',
		'Squirtle',
		'Vegetable',
		'2Scoops',
		'3Scoops',
		'Jigglypuff',
	];

	pCtrl.jigglyPuff = {
		squishiness : 7,
		rage 		: 'irate',
		rockstar 	: true,
		name 		: 'jigglypugg',
	};


	// Array with DUPLICATE values
	// pCtrl.clonedPokemon = [
	// 	'Jigglypuff',
	// 	'Charmander2',
	// 	'Bulbasaur',
	// 	'Bulbasaur',
	// 	'Bulbasaur',
	// 	'Squirtle',
	// 	'Vegetable',
	// 	'2Scoops',
	// 	'2Scoops',
	// 	'2Scoops',
	// 	'3Scoops',
	// 	'Jigglypuff',
	// ];


	pCtrl.trainers = [
		{
			name   : "Ash",
			badges : [
				"Earth",
				"Wind",
				"Fire",
			],
			skill  : 1,
		},{
			name   : "Misty",
			badges : [
				"Water",
			],
			skill  : 3,
		},{
			name   : "Brock",
			badges : [
				"Rock",
				"Suplex",
				"Cascade"
			],
			skill  : 5,
		}];




}

// function myFunc (x) {
// 	console.log(x)
// }
// myFunc('Spot')
angular.module('PokeApp')
	.controller('pokeController', [
		'pokeFactory',
		pokeTroller
	])


function pokeTroller (pokeFactory) {
	var pCtrl = this;

	console.log(pokeFactory)
	// Can't assign the getPokedex call to a variable because it is ASYNCHRONOUS
	// pCtrl.pokemonData = pokeFactory.getPokedex()
	console.log('Before we get the Pokedex')
	// We need to utilize CALLBACK functions to handle what we do when we get the response

	pokeFactory.getPokedex().then(function(response){
		// STEP 4 of REQUEST/RESPONSE cycle (handling the RESPONSE)
		console.log('Reponse from server!', response)

		pCtrl.pokemonData = response.data;

		// Assign to the factory to share with other controllers
		pokeFactory.pokemon = response.data.pokemon_entries

		// In a different controller!
		// if(pokeFactory.pokemon){ DONT MAKE A REQUEST }
		// else { MAKE A REQUEST }
		//===========================

	})
	console.log('After we get the Pokedex')

	pCtrl.clickHandler = function(){
		
	}
	
	// $http.get('~').failure()
	// $http.get('~').success()
	// $http.get('~').then()


}
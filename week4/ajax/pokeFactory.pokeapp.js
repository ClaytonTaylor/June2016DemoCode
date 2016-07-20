angular.module('PokeApp')
	.factory('pokeFactory', [
		'$http',
		pokeFact
	])

function pokeFact ($http) {

	return {
		getPokemon : function(){
			return $http.get()
		},
		getPokedex : function(){
			// Initiating STEP 1 in REQUEST/RESPONSE cycle
			return $http.get('http://pokeapi.co/api/v2/pokedex/1/')
		}
	}
}

// $http.get(URL)
// $http.post(URL, DATA)
// $http.put(URL, DATA)
// $http.delete(URL)

// $http({
// 	url : URL,
// 	method : METHOD,
// 	data : DATA,
// 	params : QUERYSTRING OBJECT
// })

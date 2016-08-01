var pokeymans = [
	'charmangler',
	'squirtles',
	'pikachewed',
	'jigglypoof',
]

function getPokeyman (ind) {
	return pokeymans[ind]
}

// Angular factory
// return {
// 	getPokeyman : getPokeyman,
// 	pokeymans   : pokeymans
// }
// Node Exports
module.exports = {
	getPokeyman : getPokeyman,
	pokeymans   : pokeymans
}

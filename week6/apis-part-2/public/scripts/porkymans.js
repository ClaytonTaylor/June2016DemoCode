angular.module('OakExpress', [])
    .controller('Pokedex', Pokedex)
    .factory('PorkymanFactory', PorkymanFactory)

Pokedex.$inject = ['$http','$location','PorkymanFactory']; // inject AJAX abilities
PorkymanFactory.$inject = ['$http'];

function Pokedex($http, $location, PorkyMans) {
    console.info('Pokedex has done been loaded.');

    var dex = this;

    dex.currentUrl = $location.$$absUrl;
    dex.currentPokemon = {};
    dex.currentEvoChain = {};
    dex.pokemonName = '';

    dex.factory = PorkyMans;

    dex.submit = () => {
        dex.currentPokemon.name = "loading..."

        PorkyMans.grabAPokemon(dex.pokemonName)
            .then(dex.submitSuccess, dex.submitError);
    }

    dex.submitSuccess = (res) => {
        console.debug('dex.submitSuccess:', res.data);

        dex.currentPokemon = res.data;
        dex.pokemonName = '';
    }

    dex.submitError = (err) => {
        console.error('dex.submitError', err);
    }

    dex.getChain = () => {
        PorkyMans.getEvoChain(dex.currentPokemon.evolution_chain.url)
            .then(dex.getChainSuccess, dex.getChainError)
    }

    dex.getChainSuccess = (res) => {
        console.info('Got chain', res.data);

        dex.currentEvoChain = res.data;

        dex.currentPokemon.evolvesTo =
            dex.currentEvoChain.chain.evolves_to[0].evolves_to[0].species.name;

        console.log()
    }

    dex.getChainError = (err) => {
        console.error('Could not get chain :(')
    }
}

function PorkymanFactory($http) {
    return {
        grabAPokemon: (pokemonName) => {
            return $http({
                url: '/api/porkyman',
                params: { pokemon: pokemonName }
            });
        },
        getEvoChain: (url) => {
            return $http({ url: url });
        }
    };
}

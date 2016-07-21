console.info('App.js loaded!')

angular.module('Chuckathon', [])
    // .controller('ChuckingAwesomeController', ['ChuckFactory', ChuckingAwesome])
    .controller('ChuckingAwesomeController', ChuckingAwesome)
    // .controller('ChuckingAwesomeController', ['$http', ChuckingAwesome])
    .factory('ChuckFactory', ChuckFactory)

ChuckingAwesome.$inject = ['ChuckFactory']
ChuckFactory.$inject = ['$http']

function ChuckingAwesome(ChuckFactory){
    console.debug('ChuckingAwesomeController:loaded')
    console.debug('ChuckingAwesomeController:ChuckFactory', ChuckFactory)

    var chuck = this

    chuck.title = "Time waits for no man. Unless that man is Chuck Norris."
    chuck.quote = "" // its really to declare default values for controller variables

    ChuckFactory.getRandomQuote()
        .then(function(){
            
        })
}

function ChuckFactory($http){
    console.debug('ChuckingAwesomeController:loaded')
    return {
        getRandomQuote: function() {
            return $http.get('http://api.icndb.com/jokes/random')
        }
    }
}

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

    chuck.clickitySplit = function () {
        ChuckFactory.getRandomQuote()
            // .success() // deprecated, don't use them!
            // .failure() // deprecated, don't use them!
            .then(function(res){
                console.debug('getRandomQuote:res', res)
                // chuck.quote = res.data.value.joke

                // Object access safetey:
                // this is how to safely access nested properties on a object
                var data  = res.data   || {}
                    value = data.value || {}
                    joke  = value.joke || ''

                chuck.quote = joke || ':( no joke found.' // UI/UX feedback
            }, function(error) { // OMG DON"T FORGET THIS
                // Add an error handler callback to your THEN functions!
                // Add an error handler callback to your THEN functions!
                // Add an error handler callback to your THEN functions!
                // Add an error handler callback to your THEN functions!
                // Add an error handler callback to your THEN functions!
                // Add an error handler callback to your THEN functions!
                // Add an error handler callback to your THEN functions!
                // Add an error handler callback to your THEN functions!
                // Add an error handler callback to your THEN functions!
                // Add an error handler callback to your THEN functions!
                // Add an error handler callback to your THEN functions!
                console.error('ERROR:clickitySplit could not get API response:', error)

                // oh nos! proceed with caution
                try {
                    // unsafe code goes here
                    chuck.norris.is.awesome
                } catch (error) {
                    console.log("Could not access properties", error)
                }
                // NOTE: JSON.parse is UNSAFE : always try catch it

                chuck.quote = ':( no joke found.'
            })
    }

}

function ChuckFactory($http){
    console.debug('ChuckingAwesomeController:loaded')
    return {
        getRandomQuote: function() {
            return $http.get('httpiss://api.icndb.com/jokes/random')
        }
    }
}

console.info('App.js loaded!')

angular.module('Chuckathon', [])
    // .controller('ChuckingAwesomeController', ['Chuckfactory', ChuckingAwesome])
    .controller('ChuckingAwesomeController', ChuckingAwesome)
    .factory('ChuckFactory', ChuckFactory)

ChuckingAwesome.$inject = ['ChuckFactory']

function ChuckingAwesome(ChuckFactory){
    console.debug('ChuckingAwesomeController:loaded')
    console.debug('ChuckingAwesomeController:ChuckFactory', ChuckFactory)
}

function ChuckFactory(){
    console.debug('ChuckingAwesomeController:loaded')
    return {}
}

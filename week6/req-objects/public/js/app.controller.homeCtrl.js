angular.module('App')
	.controller('homeController', homeController)

homeController.$inject = ['$http'];

function homeController ($http) {
	var hCtrl = this;
	hCtrl.newBook = {};

	hCtrl.createBook = function(){

		$http.post('/api/books', hCtrl.newBook)

	}
}
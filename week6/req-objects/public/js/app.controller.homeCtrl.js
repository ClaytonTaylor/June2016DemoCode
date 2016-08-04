angular.module('App')
	.controller('homeController', homeController)

homeController.$inject = ['$http'];

function homeController ($http) {
	var hCtrl = this;
}
// app.controller.home.js
angular.module('ViceCity')
	.controller('homeController', [homeController]);

function homeController (){
	var hCtrl = this;

	hCtrl.welcomeMessage = 'The only place for sweet, sweet news';
	hCtrl.getTheNews = function(){
		console.log('Wow!  So much news!');
		hCtrl.news = [
			'Bad things',
			'Squirrel waterskiing',
			'More bad things'
		]
	}
}
angular.module('app', [])

angular.module('app')
	.controller('mainController', ['$http', function($http){
        var main  = this;
        main.signup = function(){
            $http({
                method : 'POST',
                url    : '/register',
                data   : main.signupForm
            }).then(function(returnData){
                console.log(returnData)
                window.location.href="/chat"
            }, function(err){
                console.log('NOOOOO')
            })
        }

        main.login = function(){
            $http({
                method : 'POST',
                url    : '/login',
                data   : main.loginForm
            }).then(function(returnData){
                window.location.href="/chat"
            }, function(err){
                console.log('NOOOOO')
            })
        }

	}])
	
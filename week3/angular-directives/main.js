// console.log(angular);

// First Component we NEED in Angular is called a module
//      A Module is essentially a bucket for code in your application (container for OTHER angular components)

// Create a module
angular.module('Zordon', []);
// What's that empty array!?
	// -- Called an INJECTOR - angular uses something called DEPENDENCY INJECTION


// Next big component in Angular is a CONTROLLER
// Probably will be the most common angular component you create
// Controllers help you expose data to the view
// CONTROLLERS are registered to a MODULE

// With only ONE argument, the module method will retrieve an existing module
angular.module('Zordon')
	// Big difference between controller and module method : the FINAL element in the injector MUST be a function that represents the controller itself
	.controller('alpha', [
		'$scope', // This is the object that will expose data to the view
		// '$http',
		alphaCtrl
	]);

	// This is the function that represents the controller
	// We must pass, as parameters, the dependencies we injected above
	function alphaCtrl($scope){
		console.log('Controller is working! Ay yai yai yai yai!');

		$scope.greeting = 'Welcome to the Command Center!';

		$scope.subGreeting = 'Power Rangers ONLY';

		$scope.fightPutty = function(){
			$scope.subGreeting = 'Punch Noises!  The putty disappeared...';
		}

	}

	// Under the hood, angular will call our controller function and pass in the dependencies we specified (in our injector array) as arguments
	// alphaCtrl(someBigObj['$scope'], someBigObj['$http'])

	// arr.map(function(currentEl, index){

	// });
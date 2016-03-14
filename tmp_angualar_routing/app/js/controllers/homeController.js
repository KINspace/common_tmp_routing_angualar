'use strict'
// create the controller and inject Angular's $scope
myApp.controller('homeController', function($scope){
	// create a message to display in our view
	$scope.message = 'Home Page!';
});
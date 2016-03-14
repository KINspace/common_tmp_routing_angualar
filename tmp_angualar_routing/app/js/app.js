  'use strict'

  // create the module and name it scotchApp
    var myApp = angular.module('myApp', ['ngRoute']);


     // configure our routes
    myApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'homeController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            })

            //route for the animation
            .when ('/animation', {
                templateUrl: 'pages/animation.html'
            })

             // $routeProvider.otherwise({ redirectTo: "/home" });
    });


    // // create the controller and inject Angular's $scope
    // scotchApp.controller('mainController', function($scope) {
    //     // create a message to display in our view
    //     $scope.message = 'Everyone come and see how good I look!';
    // });

    // kpdApp.controller('aboutController', function($scope) {
    // 	$scope.message = 'Look! I am an about page.';
    // });

    // kpdApp.controller('contactController', function($scope) {
    // 	$scope.message = 'Contact us! This is a demo.';
    // });

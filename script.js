// create the module and name it scotchApp
var someApp = angular.module('someApp', ['ngRoute']);

someApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'pages/home.html',
      controller : 'Controllers/newController'
    })
    .when('/about', {
      templateUrl: 'pages/about.html',
      controller : 'Controllers/aboutController'
    })
});

// create the controller and inject Angular's $scope
someApp.controller('aboutController', function($scope) {
  $scope.message = 'This is an about page!';
});

// create the controller and inject Angular's $scope
someApp.controller('newController', function($scope) {
  $scope.message = 'This is an awesome app!';
});

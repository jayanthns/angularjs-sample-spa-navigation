var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider

  .when('/', {
    templateUrl: 'pages/main.html',
    controller: 'mainController'
  })

  .when('/second', {
    templateUrl: 'pages/second.html',
    controller: 'secondController'
  })
});

myApp.controller('mainController', ['$scope', function($scope){
  $scope.name = "JAYANTH";
  console.log($scope.name);
}]);

myApp.controller('secondController', ['$scope', function($scope){
  $scope.name = "NS";
  console.log($scope.name);
}]);

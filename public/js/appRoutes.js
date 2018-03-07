angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
    // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        }).when('/dashboard', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
    }).when('/about', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
    }).when('/about', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
    })

    /*$locationProvider.html5Mode(true);*/

}]);

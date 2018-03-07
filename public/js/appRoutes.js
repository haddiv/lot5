angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
    // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
<<<<<<< HEAD
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

=======
        })


>>>>>>> a1931d60814dfd10a70831438d87a03612c357b2
    /*$locationProvider.html5Mode(true);*/

}]);

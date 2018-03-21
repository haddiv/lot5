angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
    // home page
        .when('/', {
            templateUrl: 'views/employee/list.html',
            controller: 'EmployeeController'
        });


    $locationProvider.html5Mode(true);

}]);

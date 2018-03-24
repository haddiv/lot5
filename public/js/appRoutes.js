angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
    // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        }).when('/employee', {
        templateUrl: 'views/employee/list.html',
        controller: 'EmployeeController'
    }).when('/student', {
        templateUrl: 'views/student/list.html',
        controller: 'StudentController'
    }).when('/teacher', {
        templateUrl: 'views/teacher/list.html',
        controller: 'TeacherController'
    });


    $locationProvider.html5Mode(true);

}]);

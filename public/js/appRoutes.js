angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })
        // teacher page
        .when('/teacher',{
            templateUrl: 'views/teacher/list.html',
            controller: 'teacherController'
        })
        .when('/teacher/create',{
            templateUrl: 'views/teacher/view.html',
            controller: 'teacherController'
        })
        .when('/student',{
            templateUrl: 'views/student/list.html',
            controller: 'studentController'
        })
        .when('/student/create',{
            templateUrl: 'views/student/view.html',
            controller: 'studentController'
        })
    $locationProvider.html5Mode(true);

}]);

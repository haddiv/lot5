angular.module('EmployeeService', []).factory('Employee', ['$http', function ($http) {

    return {

        get: function () {
            return $http.get('/users');
        }

    }

}]);
angular.module('EmployeeCtrl', []).controller('EmployeeController', function($scope, $http,$interval) {
    $scope.title = "Employee List 2";
    $scope.description = "test Description";
    $scope.list = [];

    $http({
        method: 'GET',
        url: '/api/employee'
    }).then(function successCallback(response) {
        console.log(response);
        $scope.list = response.data;

    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });

});
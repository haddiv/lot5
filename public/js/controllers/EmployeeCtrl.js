angular.module('EmployeeCtrl', []).controller('EmployeeController', function($scope, $http,$interval) {
    $scope.title = "Employee List 2";
    $scope.description = "test Description";
    $scope.list = [
        {
            firstName : "Ani",
            lastName : "Karapetyan",
            email : "Karapetyan@gmail.com"
        },
        {
            firstName : "Anahit",
            lastName : "Karapetyan1",
            email : "Karapetyan1@gmail.com"
        }
    ]

    // $http({
    //     method: 'GET',
    //     url: '/api/employee'
    // }).then(function successCallback(response) {
    //     console.log(response);
    //     $scope.list = response.data;
    //
    // }, function errorCallback(response) {
    //     // called asynchronously if an error occurs
    //     // or server returns response with an error status.
    // });

});
angular.module('EmployeeCtrl', []).controller('EmployeeController', function($scope) {
    $scope.title = "Employee List 2";
    $scope.description = "test Description";
    $scope.list = [];

    $scope.list = [
        {
            FirstName:"Poxos",
            LastName:"Poxosyan",
            Email:"Poxosyan@gmail.com",
        },
        {
            FirstName:"Petros",
            LastName:"Petrosyan",
            Email:"petrosyan@gmail.com",
        }
    ];
});
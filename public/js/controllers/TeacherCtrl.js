angular.module('TeacherCtrl', []).controller('TeacherController', function($scope) {
    $scope.title = "Teacher List ";
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
        },
        {
            FirstName:"Petros",
            LastName:"Petrosyan",
            Email:"petrosyan@gmail.com",
        }
    ];
});
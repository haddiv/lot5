angular.module('TeacherCtrl', []).controller('TeacherController', function($scope) {
    $scope.title = "Teacher List ";
    $scope.description = "test Description for teacher";
    $scope.list = [];

    $scope.list = [
        {
            FirstName:"Poxos",
            LastName:"Student",
            Email:"Poxosyan@gmail.com"
        },
        {
            FirstName:"Petros",
            LastName:"Student",
            Email:"petrosyan@gmail.com"
        }
    ];
});
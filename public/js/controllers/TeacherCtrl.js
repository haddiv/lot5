angular.module('TeacherCtrl', []).controller('TeacherController', function($scope) {
    $scope.title = "Teacher List ";
    $scope.description = "test Description for student";
    $scope.list = [];

    $scope.list = [
        {
            FirstName:"Poxos",
            LastName:"Student",
            Email:"Poxosyan@gmail.com",
            salary: "30000",
        },
        {
            FirstName:"Petros",
            LastName:"Student",
            Email:"petrosyan@gmail.com",
            salary: "40000",
        }
    ];
});
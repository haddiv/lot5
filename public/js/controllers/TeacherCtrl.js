angular.module('TeacherCtrl', []).controller('StudentController', function($scope) {
    $scope.title = "Teacher List ";
    $scope.description = "test Description for student";
    $scope.list = [];

    $scope.list = [
        {
            FirstName:"Poxos",
            LastName:"Student",
            Email:"Poxosyan@gmail.com",
        },
        {
            FirstName:"Petros",
            LastName:"Student",
            Email:"petrosyan@gmail.com",
        }
    ];
});
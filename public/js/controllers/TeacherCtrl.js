angular.module('TeacherCtrl', []).controller('TeacherController', function($scope) {
    $scope.title = "Teacher List";
    $scope.description = "test Description Teacher";
    $scope.list = [];

    $scope.list = [
        {
            FirstName:"Simon",
            LastName:"Simonyanyan",
            Email:"Simonyan@gmail.com",
        },
        {
            FirstName:"Aaaa",
            LastName:"Bbbbyan",
            Email:"ababab@gmail.com",
        }
    ];
});
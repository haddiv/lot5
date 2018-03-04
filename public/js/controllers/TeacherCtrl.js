angular.module('TeacherCtrl', []).controller('TeacherController', function($scope) {
    $scope.title = "Teacher List ";
    $scope.description = "test Description for teacher";
    $scope.list = [];
    $scope.list = [
        {
            FirstName:"Ani",
            LastName:"Teacher",
            Email:"Manukyan@gmail.com",
            Phone:"+37491123456",
            Salary:"100 000AMD",
        },
        {
            FirstName:"Lili",
            LastName:"Teacher",
            Email:"Avagyan@gmail.com",
            Phone:"+37491123456",
            Salary:"100 000AMD",
        }
    ];
});
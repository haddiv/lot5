angular.module('StudentCtrl', []).controller('StudentController', function($scope) {
    $scope.title = "Student List ";
    $scope.description = "test Description for Student";
    $scope.list = [];
    $scope.list = [
        {
            FirstName:"Ani",
            LastName:"Teacher",
            Email:"Manukyan@gmail.com",
        },
        {
            FirstName:"Lili",
            LastName:"Teacher",
            Email:"Avagyan@gmail.com",
        }
    ];
});
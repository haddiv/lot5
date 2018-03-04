angular.module('EmployeCtrl', []).controller('EmployeController', function($scope) {
    $scope.title = "Employe List ";
    $scope.description = "test Description for Employe";
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
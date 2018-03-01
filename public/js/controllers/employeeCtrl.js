angular.module('employeeCtrl', []).controller('EmployeeController', function($scope, Employee){
    $scope.users = {};

    Employee.get().then(function (value) {
        $scope.users = value.data;
        console.log(value.data);
    });


});
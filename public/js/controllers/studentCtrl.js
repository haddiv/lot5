angular.module('teacherCtrl', []).controller('teacherController', function($scope) {
    $scope.title = "Teacher List";
    $scope.description = "test Description";
    $scope.list = [];


    $scope.list = [
        {
            firstname : "Poxos",
            lastname: "Poxosyan",
            email: "john@example.com",
            phone: "0000000"
    },
        {
            firstname : "Petros",
            lastname: "Petosyan",
            email: "jeck@example.com",
            phone: "0000011"
        },
        {
            firstname : "Pilipos",
            lastname: "Piliposyan",
            email: "pilos@example.com",
            phone: "0000022"
        }
    ]

});
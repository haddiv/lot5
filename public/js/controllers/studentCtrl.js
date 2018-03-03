angular.module('studentCtrl', []).controller('studentController', function($scope) {
    $scope.title = "Students List";
    $scope.description = "test Description";
    $scope.list = [];


    $scope.list = [
        {
            firstname : "Hayk",
            lastname: "Poxosyan",
            email: "john@example.com",
            phone: "0000000"
    },
        {
            firstname : "Karo",
            lastname: "Petosyan",
            email: "jeck@example.com",
            phone: "0000011"
        },
        {
            firstname : "Ann",
            lastname: "Piliposyan",
            email: "pilos@example.com",
            phone: "0000022"
        }
    ]

});
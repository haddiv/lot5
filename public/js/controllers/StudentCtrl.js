angular.module('StudentCtrl', []).controller('StudentController', function($scope) {
    $scope.title = "Student List 2";
    $scope.description = "test Description for student";
    $scope.list = [];

    $scope.list = [
        {
            FirstName:"Ani",
            LastName:"Amiryan",
            Email:"Amiryan@gmail.com",
            phone:"123123"
        },

        {
            FirstName:"Karine",
            LastName:"Karapetyan",
            Email:"Karapetyan@gmail.com",
            phone:"456456"
        },
    ];
});
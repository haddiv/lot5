angular.module('StudentCtrl', []).controller('StudentController', function($scope,$http) {
    $scope.title = "Student List 2";
    $scope.description = "test Description for student";
    $scope.list = [];

    $http({
        method: 'GET',
        url: '/api/student'
    }).then(function successCallback(response) {
        console.log(response);
        $scope.list = response.data;

    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });
});
angular.module('EmployeeCtrl', []).controller('EmployeeController', function($scope, $http,$interval) {
    $scope.title = "Employee List 2";
    $scope.description = "test Description";
    $scope.list = [];
    $scope.model = {
        FirstName:"",
        LastName:"",
        Email:""
    };
    $http({
        method: 'GET',
        url: '/api/employee'
    }).then(function successCallback(response) {
        console.log(response);
        $scope.list = response.data;

    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });

    $scope.submit = function() {

        $http.post('/api/employee',$scope.user).
        then(function(response) {
            console.log("posted successfully");
        }).catch(function(response) {
            console.error("error in posting");
        })
    };

});
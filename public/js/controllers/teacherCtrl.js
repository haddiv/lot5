angular.module('teacherCtrl', []).controller('teacherController', function($scope, $http,$interval) {
    $scope.title = "Teacher List";
    $scope.description = "test Description";
    $scope.list = [];
    $scope.model = {
        FirstName:"",
        LastName:"",
        Email:"",
        Phone:""
    };


    $http({
        method: 'GET',
        url: '/api/teacher'
    }).then(function successCallback(response) {

        console.log(response);
        $scope.list = response.data ;
        // this callback will be called asynchronously
        // when the response is available
    }, function errorCallback(response) {
    });


    $scope.submit = function() {
        $http.post('/api/teacher',$scope.model)
            .then(function(response) {
            console.log("posted successfully");
        }).catch(function(response) {
            console.error("error in posting");
        })
    };
});
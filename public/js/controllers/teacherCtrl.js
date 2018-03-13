angular.module('teacherCtrl', []).controller('teacherController', function($scope, $http) {
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

        // console.log(response);
        $scope.list = response.data ;
    }, function errorCallback(response) {
    });


    $scope.submit = function() {
        $http.post('/api/teacher/create',$scope.model)
            .then(function(response) {
                console.log(response,"posted successfully");
            }).catch(function(response) {
            console.error("error in posting");
        })
    };


    var Create = "teacher/create"
    $scope.something = Create;

});
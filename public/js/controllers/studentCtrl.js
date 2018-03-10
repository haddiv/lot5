angular.module('studentCtrl', []).controller('studentController', function($scope, $http) {
    $scope.title = "Students List";
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
        url: '/api/student'
    }).then(function successCallback(response) {

        console.log(response);
        $scope.list = response.data ;
    }, function errorCallback(response) {
    });


    $scope.submit = function() {
        $http.post('/api/student',$scope.model)
            .then(function(response) {
                console.log("posted successfully");
            }).catch(function(response) {
            console.error("error in posting");
        })
    };



    $scope.something = "student/create";
    // $scope.open = function(){
    //     $scope.something = "teacher/create";
    // };

});
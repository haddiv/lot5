angular.module('HomeCtrl', []).controller('HomeController', function($scope,$http) {

    $scope.new_person={};
    $scope.clicked_person={};

    $http({
        method: 'GET',
        url: '/api/person'
    }).then(function successCallback(response) {
        console.log(response.data);
        $scope.persons = response.data;
        }, function errorCallback(response) {
      // or server returns response with an error status.
    });







/*
    $scope.persons=[
        {firstname:"asd",lastname:"lastname",email:"you@example.com",phone:123456,salary:987654},
        {firstname:"fgh",lastname:"lastname",email:"you@example.com",phone:123456,salary:987654},
        {firstname:"tyu",lastname:"lastname",email:"you@example.com",phone:123456,salary:987654}
    ];*/



    $scope.save_person = function () {
        $scope.persons.push($scope.new_person);
        $scope.new_person={};
    };

    $scope.select_person = function (person) {
        $scope.clicked_person = person;

    };

    $scope.update_person = function () {

    };
    
    $scope.delete_person = function () {
        $scope.persons.splice($scope.persons.indexOf($scope.clicked_person, 1));
    };
});
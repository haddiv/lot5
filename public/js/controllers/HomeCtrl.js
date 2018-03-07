angular.module('HomeCtrl', []).controller('HomeController', function($scope) {


    $scope.new_person={};
    $scope.clicked_person={};


    $scope.persons=[
        {firstname:"name",lastname:"lastname",email:"you@example.com",phone:123456,salary:987654},
        {firstname:"name",lastname:"lastname",email:"you@example.com",phone:123456,salary:987654},
        {firstname:"name",lastname:"lastname",email:"you@example.com",phone:123456,salary:987654}
    ];
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
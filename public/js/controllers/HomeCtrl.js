
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

    $scope.submit = function() {
        $http.post('/api/employee',$scope.model).
        then(function(response) {

            $scope.persons.push(response.data);

            $scope.message = "New employee added successfully";
            /*response.data = {};*/
        }).catch(function(response) {
            console.error("error in posting");
        })
    };
   /* $scope.clicked_person*/
    $scope.delete_model = function (id) {
        $http.delete('/api/person/'+ id._id)
            .then(function(data) {
                $scope.persons.splice($scope.persons.indexOf($scope.data, 1));
                console.log(data);
            }).catch(function(response) {
            console.error("error in posting");
        })
    };



    /*$scope.persons=[
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



    $scope.create = false;
    $scope.toggle = function () {
        $scope.create = !$scope.create;
    };
    $scope.delete = false;
    $scope.toggle_del = function () {
        $scope.delete = !$scope.delete;
    };

    $scope.clear_message = function () {
        $scope.message = "";
    }
});
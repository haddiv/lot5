angular.module('EmployeeCtrl', []).controller('EmployeeController', function($scope, EmployeeSer) {

    $scope.title = "Employee";
    $scope.showButton = true;

    $scope.list = [];

    $scope.model = {
        firstname:"",
        lastname:"",
        email:"",
        salary: "",
        phone: ""
    };

    $scope.clearModel = function () {

        for(var i in $scope.model){

            $scope.model[i] = '';

        }

    };

    EmployeeSer.get().then(function (data) {

        $scope.list = data;

    });

    $scope.submit = function() {

        EmployeeSer.create($scope.model).then(function (data) {

            $scope.list.push(data);
            $scope.hideRegDiv();

        });

    };

    $scope.deleteModelInList = function(ind){

        EmployeeSer.delete($scope.list[ind]._id);

        $scope.list.splice(ind, 1);

    };

    $scope.showRegDiv = function () {

        $scope.regDiv = true;
        $scope.viewDiv = false;

        $scope.clearModel();
    };

    $scope.hideRegDiv = function () {

        $scope.regDiv = false;

    };

    $scope.showViewDiv = function (ind) {

        $scope.hideRegDiv();

        $scope.viewDiv = true;

        for(var i in $scope.model){

            if(i === 'salary'){

                $scope.model[i] = + $scope.list[ind][i];

            }else {

                $scope.model[i] = $scope.list[ind][i];

            }

        }

    };

    $scope.closeViewDiv = function () {

        $scope.viewDiv = false;

    };

    $scope.showUpdateDiv = function (ind) {

        for(var i in $scope.model){

            if(i === 'salary'){

                $scope.model[i] = + $scope.list[ind][i];

            }else {

                $scope.model[i] = $scope.list[ind][i];

            }

        }

        $scope.updateDiv = true;
        $scope.showButton = false;
        $scope.updateIndex = ind;

    };

    $scope.update = function (ind) {

        for(var i in $scope.model){

            $scope.list[ind][i] = $scope.model[i];

        }

        EmployeeSer.put($scope.list[ind])

        $scope.updateDiv = false;
        $scope.showButton = true;

    }

});

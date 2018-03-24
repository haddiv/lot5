 angular.module('EmployeeService', []).factory('EmployeeSer', ['$http', function($http) {

    return {

        get : function() {
           return $http.get('/api/employee').then(function successCallback(response) {

               return response.data;

           }, function errorCallback(response) {

           });
        },

        create : function(nerdData) {
            return $http.post('/api/employee', nerdData).then(function(response) {

                return response.data;

            }, function(response) {

                console.error("error in posting");

            });
        },

        delete : function(deleteData) {
            return    $http.delete('/api/employee/'+ deleteData).then(function(response) {

            }, function(response) {

                console.error("error in deleted");

            });

        },

        put : function(updateData) {
            return    $http.put('/api/employee',updateData).then(function(response) {

            }, function(response) {

                console.error("error in update");

            });

        }

}}]);
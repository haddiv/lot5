angular.module('MainCtrl', []).controller('MainController', function($scope,MainSer) {
    $scope.cat_list  = [];
     MainSer.get().then(function(value){
        $scope.cat_list  = value.data;

    });

});
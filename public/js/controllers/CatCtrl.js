angular.module('CatCtrl', []).controller('CategoryController', function($scope,Cat) {
alert();
    $scope.tagline = 'Category List';
    $scope.categoryItem = {name:'',ordering:1};
    $scope.list  = [];
    var a = Cat.get().then(function(value){
        $scope.list  = value.data;
        $scope.tagline = 'Done';

    });

    console.log($scope.list);


});
angular.module('ActorCtrl', []).controller('ActorController', function($scope) {
    $scope.title = "Actor List";
    $scope.description = " Description for Actor";
    $scope.list = [];

    $scope.list = [
        {
            FirstName:"Jeison",
            LastName:"Stetxem",
            Email:"Stetxem@gmail.com",
            Phone:"+0071500515",
            FavoriteMovie:"The Transporter"
        },
        {
            FirstName: "Jessika",
            LastName: "Alba",
            Email: "Alba@gmail.com",
            Phone: "+044415566595",
            FavoriteMovie: "Sin City"
        }, {
            FirstName: "Liam",
            LastName: "Nesson",
            Email: "Neson@gmail.com",
            Phone: "+00952155547",
            FavoriteMovie: "Taken"
        }
    ];
});
angular.module('StudentCtrl', []).controller('StudentController', function($scope, $http) {
    $scope.title = "Student List 2";
    $scope.description = "test Description for student";
    $scope.list = [];

   $scope.readCSV = function() {
          // http get request to read CSV file content
          $http.get('SalesJan2009.csv').then(function(response){
              var allTextLines = response.data.split(/\r\n|\n/);
              var headers = allTextLines[0].split(',');
              var lines = [];

              for ( var i = 0; i < allTextLines.length; i++) {
                  // split content based on comma
                  var data = allTextLines[i].split(',');
                  if (data.length == headers.length) {
                      var tarr = [];
                      for ( var j = 0; j < headers.length; j++) {
                          tarr.push(data[j]);
                      }
                      lines.push(tarr);
                  }
              }
              $scope.data = lines;
          })
      };
});
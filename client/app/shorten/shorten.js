angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links){
  $scope.link = {};
  $scope.addLink = function() {
    console.log($scope.link);
    Links.add($scope.link);
    // $location.path('/links');
  };

});

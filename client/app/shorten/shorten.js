angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links){
  $scope.link = {};
  $scope.addLink = function() {
    console.log($scope.link);
    Links.add($scope.link)
    .catch(function(err){
      $location.path('/whoops');

      console.log('peppermint forest');
    });
  };

});

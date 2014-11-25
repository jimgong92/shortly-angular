angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function(link) {
    Links.add(link)
    .then(function(data){
      console.log(data);
    })
    .catch(function(err) {
      console.log(err);
    });
  };
});

angular.module('shortly.whoops', [])

.controller('WhoopsController', function ($scope, $window) {
  // Your code here
  // whaddafu?

  $scope.goToLinks = function(){
    $window.location = 'app/links/links.html';
  };

  $scope.goToShorten = function(){
    $window.location = 'app/shorten/shorten.html';
  };
});

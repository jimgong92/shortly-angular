angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $window) {
  // Your code here
  // whaddafu?
  $scope.data = {};

  $scope.getLinks = function(){
    Links.get()
    .then(function(results){
      console.log(results);
      $scope.data.links = results;

    })
    .catch(function(err) {
      console.log('Chocolate Swamp');
    });
  };
  $scope.getLinks();

  $scope.redirect = function(link) {
    $window.open(link.base_url + '/api/links/' + link.code);
    link.visits++;
  };


});

angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $window) {
  // Your code here
  // whaddafu?
  $scope.data = {};


  $scope.getLinks = function(){
    // for each link in links make property $scope.data.link = link;
    Links.get()
    .then(function(results){
      console.log(results);
      $scope.data.links = results;

    })
    .catch(function(err) {
      console.log(err);
    });
  };
  $scope.getLinks();

  $scope.redirect = function(url) {
    $window.location = url;
  };

});

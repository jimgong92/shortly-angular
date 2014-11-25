angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  // whaddafu?
  $scope.data = {
    links: []
  };


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

});

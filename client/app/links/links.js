angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  // whaddafu?
  $scope.data = {};
  $scope.getLinks = function(){
    // for each link in links make property $scope.data.link = link;
    Links.get()
    .then(function(links){
      $scope.data.links = links;
    })
    .catch(function(err) {
      console.log(err);
    });
  };
  $scope.getLinks();

});

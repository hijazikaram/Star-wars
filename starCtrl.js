angular.module("starApp").controller("starCtrl", function($scope, starService){

  $scope.getStarData = starService.getStarWarsApi().then(function(results){
    $scope.star = results;
  })



})

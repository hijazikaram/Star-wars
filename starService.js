angular.module("starApp").service("starService", function($http, $q){

  this.getStarWarsApi = function(){
    console.log("working1");
    var baseUrl = "http://swapi.co/api/people/1/";
    return $http ({
      method: "GET",
      url: baseUrl
    }).then(function(serverResponse){
      console.log("working2");
      var response = serverResponse.data;
      console.log(response);
      return response;
    })
  }


})

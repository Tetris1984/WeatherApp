(function(){
    "use strict";
    function cityService($http){
      function getUsers(username){
            return $http.get("https://api.github.com/users")
                        .then(function(response) {
                           return response.data;
                        });
      };

      return {
          get: getUsers
      };

    };

    cityService.$inject = ["$http"];
    angular.module("weatherApp").service("cityService", cityService);

}());

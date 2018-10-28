(function () {
  "use strict";
function WeatherCtrl($stateParams, cityService) {

  var vm = this;
  vm.city = $stateParams.city;


     var onFetchError = function(message){
      vm.error = "Error Fetching Users. Message:" + message;
     };

     var onFetchCompleted = function(data){
      vm.users = data;
     };

     var getUsers = function(){
       cityService.get().then(onFetchCompleted, onFetchError);
     };

     getUsers();

}
WeatherCtrl.$inject = ["$stateParams", "cityService"];

angular.module('weatherApp').controller('WeatherCtrl', WeatherCtrl);
})();

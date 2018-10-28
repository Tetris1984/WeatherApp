(function () {
  "use strict";
  function WeatherCtrl($stateParams, cityService, $state) {

    var vm = this;
    vm.city = $stateParams.city;

    vm.onChanged = function () {
      $state.go('main.weather.details',
        {city: vm.selected}, {notify: false})
    };

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

  WeatherCtrl.$inject = ["$stateParams", "cityService", "$state"];
  angular.module('weatherApp').controller('WeatherCtrl', WeatherCtrl);
})();

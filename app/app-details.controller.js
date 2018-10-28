(function () {
  "use strict";
function WeatherDetailsCtrl($stateParams) {

  var vm = this;
  vm.city = $stateParams.city;

}
WeatherDetailsCtrl.$inject = ["$stateParams"];

angular.module('weatherApp').controller('WeatherDetailsCtrl', WeatherDetailsCtrl);
})();

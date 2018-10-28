(function () {
'use strict';

angular.module('weatherApp').config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('main/home');

  $stateProvider
    .state('main', {
      url: '/main',
      templateUrl: 'templates/main.html'
    })
    .state('main.about', {
      url: '/about',
      templateUrl: 'templates/about.html'
    })
    .state('main.home', {
      url: '/home',
      templateUrl: 'templates/home.html'
    })
    .state('main.weather', {
      url: "/weather",
      templateUrl: 'templates/city.html',
      controller: 'WeatherCtrl as weather'
    })
    .state('main.weather.details', {
      url: "/:city",
      templateUrl: 'templates/city-details.html',
      controller: "WeatherDetailsCtrl as details"
    });

});
})();

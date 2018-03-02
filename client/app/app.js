'use strict';

angular.module('paraisoCiclistaApp', [
  'paraisoCiclistaApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
])
  .constant("API","http://localhost:8080/ParaisoCiclistaBackend")
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });

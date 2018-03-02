'use strict';

angular.module('paraisoCiclistaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('parqueo-list', {
        url: '/parqueo-list',
        template: '<parqueo-list></parqueo-list>'
      });
  });

'use strict';

angular.module('paraisoCiclistaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('parqueo', {
        url: '/parqueo',
        template: '<parqueo></parqueo>'
      });
  });

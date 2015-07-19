'use strict';

angular.module('angularToolsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/todogrid', {
        templateUrl: 'app/todogrid/todogrid.html',
        controller: 'TodogridCtrl'
      });
  });

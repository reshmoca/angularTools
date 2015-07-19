'use strict';

angular.module('angularToolsApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },
    {
      'title': 'todo',
      'link': '/todo'
    },
    {
      'title': 'todogrid',
      'link': '/todogrid'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });

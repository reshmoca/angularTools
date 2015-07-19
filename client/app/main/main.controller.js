'use strict';

angular.module('angularToolsApp')
.controller('MainCtrl',['$scope', 'appService','todoGridService', function ($scope, appService, todoGridService) {
	$scope.appServiceShow = appService.getTest();
	$scope.todoGridServiceShow = todoGridService.getTodoTest();
}]);

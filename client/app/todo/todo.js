'use strict';

angular.module('angularToolsApp')
.config(function ($routeProvider) {
	$routeProvider
		.when('/todo', {
			templateUrl: 'app/todo/todo.html',
			controller: 'TodoCtrl'
		});
});

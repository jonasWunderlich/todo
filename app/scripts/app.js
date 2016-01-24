'use strict';

/**
 * @ngdoc overview
 * @name toDoApp
 * @description
 * # toDoApp
 *
 * Main module of the application.
 */
angular
  .module('toDoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {

    var routeToDoConfig  = {
      templateUrl: 'views/todo.html',
      controller: 'ToDoCtrl',
      controllerAs: 'todo',
      resolve: {}
    };

    $routeProvider
      .when('/', routeToDoConfig)
      .when('/:arg', routeToDoConfig)
      .otherwise({
        redirectTo: '/'
      });
  });

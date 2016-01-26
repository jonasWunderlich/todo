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
    'ngRoute'
  ])
  .config(function ($routeProvider) {

    var routeToDoConfig  = {
      templateUrl: 'views/todo.html',
      controller: 'ToDoCtrl',
      controllerAs: 'todo',
      resolve: {
        toDoList: ['toDoService', function (toDoService) {
          toDoService.getToDos();
          return toDoService;
        }]
      }
    };

    $routeProvider
      .when('/', routeToDoConfig)
      .when('/:arg', routeToDoConfig)
      .otherwise({
        redirectTo: '/'
      });
  });

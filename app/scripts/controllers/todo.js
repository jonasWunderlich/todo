'use strict';

/**
 * @ngdoc function
 * @name toDoApp.controller:ToDoCtrl
 * @description
 * # ToDoCtrl
 * Controller of the toDoApp
 */
angular.module('toDoApp')
  .controller('ToDoCtrl', function ($scope, $log, toDoService) {

    $scope.todos = toDoService.todos;
    $scope.newToDoItem = {};
    $scope.todoEdit = null;
    $scope.lastEdit = null;

    /**
     * @ngdoc method
     * @name changeState
     * @methodOf toDoApp.ToDoCtrl
     * @description Changes The State of a ToDo-Item
     * @param todo
     */
    $scope.changeState = function(todo) {
      todo.state = (todo.state + 1) % 3;
      toDoService.putToDo(todo)
    };

    /**
     * @ngdoc method
     * @name deleteToDo
     * @methodOf toDoApp.ToDoCtrl
     * @description Deletes ToDo-Item
     * @param todo
     */
    $scope.deleteToDo = function(todo) {
      toDoService.deleteToDo(todo);
    };

    /**
     * @ngdoc method
     * @name deleteToDo
     * @methodOf toDoApp.ToDoCtrl
     * @description When Input of new TODO is focused blur last todo in edit-mode
     */
    $scope.focusNewToDoItem = function() {
      $scope.todoEdit = null;
    };

    /**
     * @ngdoc method
     * @name createNewToDoItem
     * @methodOf toDoApp.ToDoCtrl
     * @description Creates a new ToDo-Item
     * @param todo
     */
    $scope.createNewToDoItem = function(todo) {
      $scope.newToDoItem.state = 0;
      toDoService.addToDo(todo);
      $scope.newToDoItem = {}
    };

    /**
     * @ngdoc method
     * @name editTodo
     * @methodOf toDoApp.ToDoCtrl
     * @description Puts ToDo-Item in Edit-Mode
     * @param todo
     */
    $scope.editTodo = function(todo) {
      $log.debug("Edit Mode:", todo);
      $scope.lastEdit = angular.extend({}, todo);
      $scope.todoEdit = todo;
    };

    /**
     * @ngdoc method
     * @name saveToDoItem
     * @methodOf toDoApp.ToDoCtrl
     * @description Puts ToDo-Item in Edit-Mode
     * @param todo
     */
    $scope.saveToDoItem = function(todo) {
      $scope.todoEdit = null;
      toDoService.putToDo(todo);
      $log.debug(todo.text + " saved");
    };

    $scope.revertEdits = function (todo) {
      $scope.todos[$scope.todos.indexOf(todo)] = $scope.lastEdit;
      $scope.todoEdit = null;
      $scope.lastEdit = null;
      $scope.reverted = true;
    };


  });

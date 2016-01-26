'use strict';

/**
 * @ngdoc function
 * @name toDoApp.controller:ToDoCtrl
 * @description
 * # ToDoCtrl
 * Controller of the toDoApp
 */
angular.module('toDoApp')
  .controller('ToDoCtrl', function ($scope, $log, toDoList) {

    $scope.todos = toDoList.todos;
    $scope.newToDoItem = {};

    $scope.todoEdit = null;
    $scope.lastEdit = null;
    $scope.lastEditIndex = null;

    /**
     * @ngdoc method
     * @name changeState
     * @methodOf toDoApp.ToDoCtrl
     * @description Changes The State of a ToDo-Item
     * @param todo
     */
    $scope.changeState = function(todo) {
      _revertEdits();
      todo.state = (todo.state + 1) % 3;
      toDoList.putToDo(todo)
    };

    /**
     * @ngdoc method
     * @name deleteToDo
     * @methodOf toDoApp.ToDoCtrl
     * @description Deletes ToDo-Item
     * @param todo
     */
    $scope.deleteToDo = function(todo) {
      _revertEdits();
      toDoList.deleteToDo(todo);
    };

    /**
     * @ngdoc method
     * @name createNewToDoItem
     * @methodOf toDoApp.ToDoCtrl
     * @description Creates a new ToDo-Item
     * @param todo
     */
    $scope.createNewToDoItem = function(todo) {
      if (!$scope.newToDoItem.text) {
        return;
      }
      $scope.newToDoItem.state = 0;
      toDoList.addToDo(todo);
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
      $scope.todoEdit = todo;
      $scope.lastEdit = angular.extend({}, todo);
      $scope.lastEditIndex = $scope.todos.indexOf(todo);
    };

    /**
     * @ngdoc method
     * @name saveToDoItem
     * @methodOf toDoApp.ToDoCtrl
     * @description Puts ToDo-Item in Edit-Mode
     * @param todo
     */
    $scope.saveToDoItem = function(todo) {
      toDoList.putToDo(todo);
      $log.debug(todo.text + " saved");
      $scope.todoEdit = null;
      $scope.lastEdit = null;
      $scope.lastEditIndex = null;
    };

    /**
     * @ngdoc method
     * @name escapeEdit
     * @methodOf toDoApp.ToDoCtrl
     * @description reverts changes
     * @private
     */
    function _revertEdits() {
      if(!$scope.lastEdit) {
        return;
      }
      $log.debug('Revert Edit of ', $scope.lastEdit);
      $scope.todos[$scope.lastEditIndex] = $scope.lastEdit;
      $scope.lastEdit = null;
      $scope.lastEditIndex = null;
    }

    /**
     * @ngdoc method
     * @name deleteToDo
     * @methodOf toDoApp.ToDoCtrl
     * @description When Input of new TODO is focused blur last todo in edit-mode
     */
    $scope.focusNewToDoItem = function() {
      _revertEdits();
    };

    /**
     * @ngdoc method
     * @name escapeEdit
     * @methodOf toDoApp.ToDoCtrl
     * @description escapes edit-mode and calls function to revert changes
     */
    $scope.escapeEdit = function() {
      _revertEdits();
      $scope.todoEdit = null;
    };

  });

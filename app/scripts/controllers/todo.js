'use strict';

/**
 * @ngdoc function
 * @name toDoApp.controller:ToDoCtrl
 * @description
 * # ToDoCtrl
 * Controller of the toDoApp
 */
angular.module('toDoApp')
  .controller('ToDoCtrl', function ($scope, toDoList, $log) {

    $scope.todos = toDoList;
    $scope.newToDoItem = {
      state: 0,
      text: '',
      type: 'A'
    };
    $scope.todoEdit = null;

    /**
     * @ngdoc method
     * @name changeState
     * @methodOf toDoApp.ToDoCtrl
     * @description Changes The State of a ToDo-Item
     * @param todo
     */
    $scope.changeState = function(todo) {
      todo.state = (todo.state + 1) % 3;
    };

    /**
     * @ngdoc method
     * @name deleteToDo
     * @methodOf toDoApp.ToDoCtrl
     * @description Deletes ToDo-Item
     * @param todo
     */
    $scope.deleteToDo = function(todo) {
      var index = $scope.todos.indexOf(todo);
      $scope.todos.splice(index, 1);
    };

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
      $log.debug(todo);
      $scope.todos.push(todo);
      $scope.newToDoItem = {
        state: 0,
        text: '',
        type: 'A'
      };
    };

    /**
     * @ngdoc method
     * @name editTodo
     * @methodOf toDoApp.ToDoCtrl
     * @description Puts ToDo-Item in Edit-Mode
     * @param todo
     */
    $scope.editTodo = function(todo) {
      $scope.todoEdit = todo;
      $log.debug(todo.text + " in edit mode");
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
      $log.debug(todo.text + " saved");
    };


  });

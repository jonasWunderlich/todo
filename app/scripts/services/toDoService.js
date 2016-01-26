'use strict';

/**
 * @ngdoc service
 * @name toDoApp.toDoService
 * @description
 * # toDoService
 * Service in the toDoApp.
 */
angular.module('toDoApp')
  .factory('toDoService', function ($q, $log) {

    var todos = [] ;
    var STORAGE_ID = "todo-app";

    /**
     * @ngdoc method
     * @name _getLocalStorage
     * @methodOf toDoApp.toDoService
     * @description Fetches Data from the local Storage of the Browser
     * @private
     */
    function _getLocalStorage() {
      return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
    }

    /**
     * @ngdoc method
     * @name _writeLocalStorage
     * @methodOf toDoApp.toDoService
     * @description Puts Data to the local Storage of the Browser
     * @param todos
     * @private
     */
    function _writeLocalStorage(todos) {
      localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
    }

    /**
     * @ngdoc method
     * @name _writeLocalStorage
     * @methodOf toDoApp.toDoService
     * @description Puts Data to the local Storage of the Browser
     * @returns {*}
     */
    function getToDos() {
      var deferred = $q.defer();

      $log.debug('Todos', todos);
      angular.copy(_getLocalStorage(), todos);
      $log.debug('Todos', todos);
      deferred.resolve(todos);

      return deferred.promise;
    }

	  /**
     *
     * @param todo
     * @param index
     * @returns {*}
	   */
    var putToDo = function(todo) {
      var deferred = $q.defer();

      var index = todos.indexOf(todo);
      todos[index] = todo;
      _writeLocalStorage(todos);
      deferred.resolve(todos);

      return deferred.promise;
    };

	  /**
     *
     * @param todo
     * @returns {*}
     */
    var addTodo = function(todo) {
      var deferred = $q.defer();

      todos.push(todo);
      _writeLocalStorage(todos);
      deferred.resolve(todos);

      return deferred.promise;
    };

	  /**
     *
     * @param todo
     * @returns {*}
     */
    var deleteToDo = function(todo) {
      var deferred = $q.defer();

      var index = todos.indexOf(todo);
      todos.splice(index, 1);
      _writeLocalStorage(todos);
      deferred.resolve(todos);

      return deferred.promise;
    };


    return {
      todos: todos,
      getToDos: getToDos,
      putToDo: putToDo,
      addToDo: addTodo,
      deleteToDo: deleteToDo
    }

  });

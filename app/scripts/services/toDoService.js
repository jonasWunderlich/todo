'use strict';

/**
 * @ngdoc service
 * @name toDoApp.toDoService
 * @description
 * # toDoService
 * Service in the toDoApp.
 */
angular.module('toDoApp')
  .factory('toDoService', function ($q) {

    var todos = [
      {id:0,text:'Do This',type:'A',date:'',state:0},
      {id:1,text:'Do That',type:'B',date:'',state:0},
      {id:2,text:'Do It',type:'C',date:'',state:1},
      {id:3,text:'Do Not This',type:'A',date:'',state:2}
    ];

    var getToDos = function() {
      var deferred = $q.defer();
      deferred.resolve(todos);
      return deferred.promise;
    };

    return {
      getToDos: getToDos
    }
  });

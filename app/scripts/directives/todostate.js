'use strict';

/**
 * @ngdoc directive
 * @name toDoApp.directive:todoState
 * @description
 * # todoState
 */
angular.module('toDoApp')
  .directive('todoState', function () {
    return {
      template: '<div class="todo-item-state">' +
                  '<div class="btn btn-default">' +
                    '<span class="glyphicon glyphicon-star-empty" ng-show="state === 0"></span>' +
                    '<span class="glyphicon glyphicon-wrench" ng-show="state === 1"></span>' +
                    '<span class="glyphicon glyphicon-folder-close" ng-show="state === 2"></span>' +
                  '</div>' +
                '</div>',
      restrict: 'E',
      replace: true,
      scope: {
        state: '='
      }
    };
  });

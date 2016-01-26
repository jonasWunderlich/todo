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
                    '<i class="fa fa-star fa-1x" ng-show="state === 0"></i>' +
                    '<i class="fa fa-wrench fa-1x" ng-show="state === 1"></i>' +
                    '<i class="fa fa-archive fa-1x" ng-show="state === 2"></i>' +
                  '</div>' +
                '</div>',
      restrict: 'E',
      replace: true,
      scope: {
        state: '='
      }
    };
  });

'use strict';

/**
 * @ngdoc directive
 * @name toDoApp.directive:pressEscape
 * @description
 * # pressEscape
 */
angular.module('toDoApp')
  .directive('pressEscape', function () {
    return function (scope, element, attrs) {
      element.bind("keydown", function (event) {
        if(event.which === 27) {
          scope.$apply(function (){
            scope.$eval(attrs.pressEscape);
          });

          event.preventDefault();
        }
      });
    };
  });

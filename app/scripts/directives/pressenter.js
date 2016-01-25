'use strict';

/**
 * @ngdoc directive
 * @name toDoApp.directive:pressEnter
 * @description
 * # pressEnter
 */
angular.module('toDoApp')
  .directive('pressEnter', function () {
    return function (scope, element, attrs) {
      element.bind("keydown keypress", function (event) {
        if(event.which === 13) {
          scope.$apply(function (){
            scope.$eval(attrs.pressEnter);
          });

          event.preventDefault();
        }
      });
    };
  });

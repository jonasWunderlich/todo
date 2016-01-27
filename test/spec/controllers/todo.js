'use strict';

describe('Controller: ToDoCtrl', function () {

  // load the controller's module
  beforeEach(module('toDoApp'));

  var ToDoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ToDoCtrl = $controller('ToDoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

});

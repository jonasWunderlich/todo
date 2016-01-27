'use strict';

describe('Directive: todoState', function () {

  // load the directive's module
  beforeEach(module('toDoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));


  it('should applied template', inject(function ($compile) {
    element = angular.element('<todo-state></todo-state>');
    element = $compile(element)(scope);
    expect(element.html()).not.toEqual('');
  }));

  it('should contain three different state buttons', function () {
    expect(element.find('span').length).toEqual(3);
  });
});

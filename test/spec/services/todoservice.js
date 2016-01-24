'use strict';

describe('Service: toDoService', function () {

  // load the service's module
  beforeEach(module('toDoApp'));

  // instantiate service
  var toDoService;
  beforeEach(inject(function (_toDoService_) {
    toDoService = _toDoService_;
  }));

  it('should do something', function () {
    expect(!!toDoService).toBe(true);
  });

});

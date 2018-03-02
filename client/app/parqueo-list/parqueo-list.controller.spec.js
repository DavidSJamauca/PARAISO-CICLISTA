'use strict';

describe('Component: ParqueoListComponent', function () {

  // load the controller's module
  beforeEach(module('paraisoCiclistaApp'));

  var ParqueoListComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ParqueoListComponent = $componentController('ParqueoListComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});

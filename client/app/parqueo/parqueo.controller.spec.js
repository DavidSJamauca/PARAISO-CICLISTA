'use strict';

describe('Component: ParqueoComponent', function () {

  // load the controller's module
  beforeEach(module('paraisoCiclistaApp'));

  var ParqueoComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ParqueoComponent = $componentController('ParqueoComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});

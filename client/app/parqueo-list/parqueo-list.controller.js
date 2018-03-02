'use strict';
(function(){

class ParqueoListComponent {
constructor(parqueoService) {
    this.parqueoService = parqueoService;
  }

   $onInit(){
      this.parqueoService.query().$promise
      .then(response=>{
        console.log('Parqueo lista', response);
        this.parqueo=response;
      })
      .catch(err=>{console.log('error',err);
      });
  }
}

ParqueoListComponent.$inject = ['parqueoService'];
angular.module('paraisoCiclistaApp')
  .component('parqueoList', {
    templateUrl: 'app/parqueo-list/parqueo-list.html',
    controller: ParqueoListComponent,
    controllerAs: 'vm'
  });

})();

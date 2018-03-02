'use strict';
(function(){

class ParqueoComponent {
  constructor(parqueoService) {
    this.parqueoService = parqueoService;
    this.show=false;
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

 

 ingresarCodigo(){
  for(var i = 0; i < this.parqueo.length; i++){
    if(this.parqueo[i].codigoFicha == this.parqueo.codigoFicha){
      this.itemCodigo = this.parqueo[i];
    }
  }

  this.valorParqueo();
 }


  valorParqueo(){
  	if(this.itemCodigo.horas<=3){
  		this.itemCodigo.precio=this.itemCodigo.horas*2000;
     
  	}
  	else if(this.itemCodigo.horas<=5){
  		this.itemCodigo.precio=((this.itemCodigo.horas-3)*1500)+6000;
  	}
  	else if(this.itemCodigo.horas>5){
  		this.itemCodigo.precio=(((this.itemCodigo.horas-5)*1500)+9000);
  		this.descuento=this.itemCodigo.precio*0.05;
  		this.itemCodigo.precio=this.itemCodigo.precio-this.descuento;
    }
  }


   /*capturar(item){
    this.parqueoActualizado = item;
    item.codigoFicha = item.itemCodigo;
    console.log("funcioina");
  }*/

    actualizarEstado(otracosa){
    otracosa.estado = !otracosa.estado;
    this.parqueoService.update(({id:otracosa.idCliente.id}),otracosa).$promise
    .then(response => {
      console.log(response,'Se pago exictosamente');
    })
    .catch(err => {
      console.log(err);

    });
  }
}

ParqueoComponent.$inject = ['parqueoService'];
angular.module('paraisoCiclistaApp')
  .component('parqueo', {
    templateUrl: 'app/parqueo/parqueo.html',
    controller: ParqueoComponent,
    controllerAs: 'vm'
  });

})();

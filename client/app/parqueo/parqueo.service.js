'use strict';
function parqueoService($resource,API){
	return $resource(API+'/api/parqueo/:id',{
		id:'@id'
	},{
		update:{
			method:'PUT'
		}

	});
}

parqueoService.$inject = ['$resource', 'API'];
angular.module('paraisoCiclistaApp')
  .factory('parqueoService', parqueoService);


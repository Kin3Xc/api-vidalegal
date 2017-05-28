'use strict';

app.controller('HomeController', function(localStorageService, Home, $location,$window){

	var vm = this;
	vm.activos = 0;
	vm.types = 0;
	vm.services =[];
	services();
	types();

	// iniciar proceso
	vm.update = function(status,id,service){
		console.log(status);
		Home.update({status:status, id:id, service:service}).then(function(res){
			console.log(res);
			services();
		});
	}

	// servicios
	function services(){
		Home.services().then(function(res){
			vm.completed = 0;
			vm.services = [];
			console.log(res.data);
			vm.services = res.data;

			for (var i = 0; i < res.data.length; i++) {
				if (res.data[i].status == "Completado") {
					vm.completed +=1;
				}else{
					// vm.services.push(res.data[i]);
					vm.activos = vm.services.length;
				}
			}
		});
	}

	// types
	function types(){
		Home.types().then(function(res){
			console.log(res);
			vm.types = res.data.length;
		})
	}
});


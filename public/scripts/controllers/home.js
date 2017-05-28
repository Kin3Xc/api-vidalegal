'use strict';

app.controller('HomeController', function(localStorageService, Home, $location,$window){

	var vm = this;
	vm.activos = 0;
	vm.completed = 0;
	vm.types = 0;
	vm.services =[];
	services();
	types();

	// servicios
	function services(){
		Home.services().then(function(res){
			console.log(res.data);
			vm.activos = res.data.length;

			for (var i = 0; i < res.data.length; i++) {
				if (res.data[i].status == "Completado") {
					vm.completed +=1;
				}else{
					vm.services.push(res.data[i]);
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


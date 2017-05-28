'use strict';

app.factory('Home', function($http, API_URL){

	var Home = {

		services: function(){
			return $http({
              method: 'GET',
              url: API_URL+ "/services",
            })
			.success(function(data){
				return data;
			})
			.error(function(err){
				console.log(err);
			})
		},
		types: function(){
			return $http({
              method: 'GET',
              url: API_URL+ "/types",
            })
			.success(function(data){
				return data;
			})
			.error(function(err){
				console.log(err);
			})
		},

		get_catalogos: function(){
			return $http.get(API_URL+'/get_catalogos').success(function(data){
				return data;
			})
			.error(function(err){
				console.log(err);
			})
		}

	};

	return Home

});
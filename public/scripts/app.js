'use strict';

var app = angular.module('vidalegal', [
	'ui.router',
	'LocalStorageModule'
])


// app.constant('API_URL', 'http://localhost/LeonAgencies/admin_zohar/api'); //dev
app.constant('API_URL', 'http://10.105.168.88:8080/api/v1'); //prod

app.config(function($stateProvider, $urlRouterProvider){

	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'views/home.html',
			controller: 'HomeController',
			controllerAs: 'home'
		})
		.state('create',{
			url: '/create/:id',
			templateUrl: 'views/create.html',
			controller: 'CreateController',
			controllerAs: 'create'
		})
		.state('resumeMeeting',{
			url: '/resumeMeeting',
			templateUrl: 'views/resumemeeting.html',
			controller: 'ResumeController',
			controllerAs: 'resume'
		})
		.state('sendInvitation',{
			url: '/sendInvitation',
			templateUrl: 'views/sendinvitation.html'
		})
		.state('informes',{
			url: '/informes',
			templateUrl: 'views/informes.html'
		});


	$urlRouterProvider.otherwise('/home');

});
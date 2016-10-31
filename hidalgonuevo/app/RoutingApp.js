
    // Creación del módulo
var angularRoutingApp = angular.module('angularRoutingApp', ['ngRoute']);


// Configuración de las rutas
angularRoutingApp.config(function($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl	: 'app/components/home/home.html',
			controller 	: 'ControladorPrincipal'
		})
		.when('/porquehidalgo', {
			templateUrl : 'app/components/porquehidalgo/porquehidalgo.html',
			controller 	: 'Controlador-PorqueHidalgo'
		})
		.when('/sectoresestrategicos', {
			templateUrl : 'app/components/sectoresestrategicos/sectoresestrategicos.html',
			controller 	: 'Controlador-SectoresEstrategicos'
		})
    	.when('/infraestructuraindustrial', {
			templateUrl : 'app/components/infraestructuraindustrial/infraestructuraindustrial.html',
			controller 	: 'Controlador-InfraestructuraIndustrial'
		})
    	.when('/agenciapromocion', {
			templateUrl : 'app/components/agenciapromocion/agenciapromocion.html',
			controller 	: 'Controlador-AgenciaPromocion'
		})
        .when('/ventanillaunica', {
			templateUrl : 'app/components/ventanillaunica/ventanillaunica.html',
			controller 	: 'Controlador-VentanillaUnica'
		})
	    .when('/ubicacionylogistica', {
			templateUrl : 'app/components/ubicacionylogistica/ubicacionylogistica.html',
			controller 	: 'Controlador-UbicacionyLogistica'
		})
		.when('/conectividadcarreterayferroviaria', {
			templateUrl : 'app/components/conectividadcarreteraferroviaria/conectividadcarreteraferroviaria.html',
			controller 	: 'Controlador-ConectivadCarretera'
		})
	    .when('/distanciaspuertos', {
			templateUrl : 'app/components/distanciaspuertos/distanciaspuertos.html',
			controller 	: 'Controlador-DistanciasPuertos'
		})
	    .when('/ejelogistico', {
			templateUrl : 'app/components/ejelogistico/ejelogistico.html',
			controller 	: 'Controlador-EjeLogistico'
		})
	
	
	
        .when('/rfi', {
			templateUrl : 'app/components/rfi/rfi.html',
			controller 	: 'Controlador-RFI'
		})
		.when('/step1', {
			templateUrl : null,
			controller 	: null
		})
		.when('/step2', {
			templateUrl : null,
			controller 	: null
		})
		.when('/step3', {
			templateUrl : null,
			controller 	: null
		})
		.when('/complete', {
			templateUrl : null,
			controller 	: null
		})
		.otherwise({
			redirectTo: '/'
		});


	
	
	   
	



});
        
        


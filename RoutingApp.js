
    // Creación del módulo
var angularRoutingApp = angular.module('angularRoutingApp', ['ngRoute']);

// Configuración de las rutas
angularRoutingApp.config(function($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl	: 'App/Components/home/home.html',
			controller 	: 'ControladorPrincipal'
		})
		.when('/porquehidalgo', {
			templateUrl : 'App/Components/porquehidalgo/porquehidalgo.html',
			controller 	: 'Controlador-PorqueHidalgo'
		})
		.when('/SectoresEstrategicos', {
			templateUrl : 'App/Components/SectoresEstrategicos/SectoresEstrategicos.html',
			controller 	: 'Controlador-SectoresEstrategicos'
		})
    	.when('/InfraestructuraIndustrial', {
			templateUrl : 'App/Components/infraestructuraIndustrial/InfraestructuraIndustrial.html',
			controller 	: 'Controlador-InfraestructuraIndustrial'
		})
    	.when('/AgenciaPromocion', {
			templateUrl : 'App/Components/AgenciaPromocion/AgenciaPromocion.html',
			controller 	: 'Controlador-AgenciaPromocion'
		})
        .when('/VentanillaUnica', {
			templateUrl : 'App/Components/VentanillaUnica/VentanillaUnica.html',
			controller 	: 'Controlador-VentanillaUnica'
		})
		.otherwise({
			redirectTo: '/'
		});
    
    
    
});
        
        


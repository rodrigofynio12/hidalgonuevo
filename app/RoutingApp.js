
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
		.when('/SectoresEstrategicos', {
			templateUrl : 'app/components/SectoresEstrategicos/SectoresEstrategicos.html',
			controller 	: 'Controlador-SectoresEstrategicos'
		})
    	.when('/InfraestructuraIndustrial', {
			templateUrl : 'app/components/infraestructuraIndustrial/InfraestructuraIndustrial.html',
			controller 	: 'Controlador-InfraestructuraIndustrial'
		})
    	.when('/AgenciaPromocion', {
			templateUrl : 'app/components/AgenciaPromocion/AgenciaPromocion.html',
			controller 	: 'Controlador-AgenciaPromocion'
		})
        .when('/VentanillaUnica', {
			templateUrl : 'app/components/VentanillaUnica/VentanillaUnica.html',
			controller 	: 'Controlador-VentanillaUnica'
		})
        .when('/RFI', {
			templateUrl : 'app/components/RFI/RFI.html',
			controller 	: 'Controlador-RFI'
		})
       .when('/GenerarUsuario', {
			templateUrl : 'app/components/GenerarUsuario/GenerarUsuario.html',
			controller 	: 'Controlador-GenerarUsuario'
		})
    
		.otherwise({
			redirectTo: '/'
		});
    
    
    
});
        
        


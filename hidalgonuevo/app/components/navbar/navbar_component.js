angularRoutingApp.directive('navbarComponent', function(){
	

	return{
		templateUrl: 'app/components/navbar/navbar.html',
	   controller:'Controlador-navbar'
	};

	
});



angularRoutingApp.controller('Controlador-navbar', function($scope) {

	   $scope.funcionsubiranimacion = function()
    {
    
$('html,body').animate({scrollTop: $(".anclavista").offset().top}, 1000);
		
    }
	   
	
});





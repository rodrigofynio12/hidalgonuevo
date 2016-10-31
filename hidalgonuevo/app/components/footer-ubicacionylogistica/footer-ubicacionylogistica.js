angularRoutingApp.directive('footerubicacionylogisticaComponent', function(){
	
	return{
		templateUrl: 'app/components/footer-ubicacionyLogistica/footer-ubicacionylogistica.html',
		controller:'Controlador-ubicacionlogistica'
			
	};

});


    
   
   

angularRoutingApp.controller('Controlador-ubicacionlogistica', function($scope) {


	
	
	$scope.funcionsubir=function()
	{
		

$('html,body').animate({scrollTop:100}, 1000);
		

		
		
		
	}


	
	  
	   
});
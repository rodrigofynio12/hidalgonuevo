angularRoutingApp.controller('Controlador-EjeLogistico', function($scope) {
	$scope.message = 'Esta es la página de EjeLogistico';
	
	
	
	   $(function() {
      $('#slides').slidesjs({
        width: 940,
        height: 504,
        play: {
          active: true,
          auto: true,
          interval: 4000,
          swap: true
        }
      });
    });
    
	
	   
	   

		$(document).ready(function() {
		
			$('.fancybox').fancybox();

			
			$(".fancybox-effects-d").fancybox({
				padding: 0,

				openEffect : 'elastic',
				openSpeed  : 150,

				closeEffect : 'elastic',
				closeSpeed  : 150,

				closeClick : true,

				helpers : {
					overlay : null
				}
			});



			
			
		});
	
	
    
	   
	   
	
	
});
    
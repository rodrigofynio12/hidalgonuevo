angularRoutingApp.controller('Controlador-ConectivadCarretera', function($scope) {
	$scope.message = 'Esta es la página de UbicacionyLogistica';
	
	
	
		$scope.message = 'home';
      
    /* Estilos de slideshow*/    
    $(function() {
      $('#slides').slidesjs({
        width: 940,
        height: 529,
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
    

angularRoutingApp.controller('ControladorPrincipal', function($scope) {
	$scope.message = 'home';
      
    /* Estilos de slideshow*/    
    $(function() {
      $('#slides').slidesjs({
        width: 940,
        height: 328,
        play: {
          active: true,
          auto: true,
          interval: 4000,
          swap: true
        }
      });
    });
    
    
    
    
    
});




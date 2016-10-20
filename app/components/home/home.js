
angularRoutingApp.controller('ControladorPrincipal', function($scope) {
	$scope.message = 'home';
    
    
 
$scope.rodrigo = function()

{
    var valortam= $('.imagen1').width();
    
    var valor =   $('.imagen').css('left');
    
    var nuevo = parseFloat(valor);
    nuevo= Math.round(nuevo*100)/100;
    
    nuevo= Math.round(nuevo);
    nuevo=nuevo*-1;
    
    var rodrigo = nuevo/valortam;
    
    
    
    if(rodrigo==-Infinity)
        {
            $('.imagen').css('margin-left','100%').delay(100).$('.imagen').css('margin-left','200%').delay(100).css('margin-left','200%');
            
        }
     if(rodrigo==1)
        {
            $('.imagen').css('margin-left','100%').delay(100).$('.imagen').css('margin-left','200%').delay(100).css('margin-left','200%');
        }
    
     if(rodrigo==2)
        {
            $('.imagen').css('margin-left','100%').delay(100).$('.imagen').css('margin-left','200%').delay(100).css('margin-left','200%');
        }
    // 
    
    
    
    
}
  
        
    

    
});




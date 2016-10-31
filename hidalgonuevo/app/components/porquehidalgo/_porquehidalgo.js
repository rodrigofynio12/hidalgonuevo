
angularRoutingApp.controller('Controlador-PorqueHidalgo', function($scope) {
	$scope.message = '';
    

    $('.porque').on('click',function()
                   {
          $('html,body').animate({scrollTop: $(".porque2").offset().top}, 500);

    })
    
    



});
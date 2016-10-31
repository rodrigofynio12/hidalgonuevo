
    $(document).on('ready', function(){

        $('.ContenedorMenuHamburguesa, .cerrar').on('click',function(){
            $('.hamburguesa').toggleClass('cruz');

            if($('.hamburguesa').hasClass('cruz')){

                $('.menu').css('top','0px');

                } else{

                    $('.menu').css('top','-120vh');
                    }
              
        })
     
    });
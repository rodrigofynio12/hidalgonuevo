
    $(document).on('ready',function()
                  {
     $('.ContenedorMenuHamburguesa,.menu>div>a').on('click',function()
                        {
         $('.hamburguesa').toggleClass('cruz');
         
         
         
         
         if($('.hamburguesa').hasClass('cruz'))
             {
                $('.menu').css('top','0px');
                 
                 
             }

         else{
             
                $('.menu').css('top','-120vh');
         }
         
         
     })
     
    })
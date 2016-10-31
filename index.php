<!DOCTYPE html>
<html ng-app='angularRoutingApp'>
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Invest in Hidalgo</title>

    <link rel="stylesheet" href="assets/css/_main.css">
    <link src="assets/fonts/OleoScript-Regular.ttf">
    <link src="Assets/fonts/Graphik/Graphik-Semibold.otf">
    <link src="Assets/fonts/Graphik/Graphik-Regular.otf">
    <link src="Assets/fonts/Graphik/Graphik-Bold.otf">
  </head>
  

  <body ng-controller="ControladorPrincipal" >
    <div class="texto-tamano"></div>
    <div class="ContenedorMaster noaparece">
      <div class="ContenedorMenuHamburguesa visible-xs">
        <div class="hamburguesa"></div>
      </div>

      <div class="noaparecer" >
        <div class="menu" id="accordion" role="tablist" aria-multiselectable="true">
          <div class="panel panel-default btn-nav-mobil">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a  class="nav-texto cerrar" href="#home">INICIO</a>
              </h4>
            </div>
          </div>
          
          <div class="panel panel-default btn-nav-mobil">
            <div class="panel-heading" role="tab" id="heading2">
              <h4 class="panel-title">
                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse2" aria-expanded="false" aria-controls="collapse2">
                  ¿POR QUÉ HIDALGO?
                </a>
              </h4>
            </div>
            <div id="collapse2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading2">
              <div class="list-group">
                <div class="nav-texto cerrar"><a href="#porquehidalgo">Ubicación y logística</a></div>
                <div class="nav-texto cerrar"><a href="#porquehidalgo">Calidad de vida</a></div>
                <div class="nav-texto cerrar"><a href="#porquehidalgo">Cifras</a></div>
              </div>
            </div>
          </div>

          <div class="panel panel-default btn-nav-mobil">
            <div class="panel-heading" role="tab" id="heading3">
              <h4 class="panel-title">
                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse3" aria-expanded="false" aria-controls="collapse3">
                  SECTORES ESTRATEGICOS
                </a>
              </h4>
            </div>
            <div id="collapse3" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading3">
              <div class="list-group">
                <div class="nav-texto cerrar"><a href="#SectoresEstrategicos">Consolidados</a></div>
                <div class="nav-texto cerrar"><a href="#SectoresEstrategicos">Prospectivos</a></div>
              </div>
            </div>
          </div>

          <div class="panel panel-default btn-nav-mobil">
            <div class="panel-heading" role="tab" id="heading4">
              <h4 class="panel-title">
                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse4" aria-expanded="false" aria-controls="collapse4">
                  INFRAESTRUCTURA INDUSTRIAL
                </a>
              </h4>
            </div>
            <div id="collapse4" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading4">
              <div class="list-group">
                <div class="nav-texto cerrar"><a href="#InfraestructuraIndustrial">Servicios generales</a></div>
                <div class="nav-texto cerrar"><a href="#InfraestructuraIndustrial">Parques industriales</a></div>
                <div class="nav-texto cerrar"><a href="#InfraestructuraIndustrial">Proyectos de gran escala</a></div>
              </div>
            </div>
          </div>

          <div class="panel panel-default btn-nav-mobil">
            <div class="panel-heading" role="tab" id="heading5">
              <h4 class="panel-title">
                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse5" aria-expanded="false" aria-controls="collapse5">
                  AGENCIA DE PROMOCIÓN
                </a>
              </h4>
            </div>
            <div id="collapse5" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading5">
              <div class="list-group">
                <div class="nav-texto cerrar"><a href="#AgenciaPromocion">Asesoría especializada</a></div>
                <div class="nav-texto cerrar"><a href="#AgenciaPromocion">Acompañamiento empresarial</a></div>
                <div class="nav-texto cerrar"><a href="#AgenciaPromocion">Seguimiento y aftecare</a></div>
                <div role="separator" class="divider"></div>
                <div class="nav-texto cerrar"><a href="#AgenciaPromocion">Incentivos a la inversión</a></div>
              </div>
            </div>
          </div>

          <div class="panel panel-default btn-nav-mobil">
            <div class="panel-heading" role="tab" id="heading6">
              <h4 class="panel-title">
                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse6" aria-expanded="false" aria-controls="collapse6">
                  VENTANILLA UNICA
                </a>
              </h4>
            </div>
            <div id="collapse6" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading6">
              <div class="list-group">
                <div class="nav-texto cerrar"><a href="#VentanillaUnica">Proceso de inversión</a></div>
                <div class="nav-texto cerrar"><a href="#RFI">RFI</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>

<!--////////////////////////////////////////////////////////////////////////-->
      <navbar-component class="subir-navbar"></navbar-component>

        <br>
        <div class="subir-vista anclavista" ng-view></div>
        
        <modal-component></modal-component>

      <footer-component class=""></footer-component>
<!--////////////////////////////////////////////////////////////////////////-->
     
    </div>

    <script src="assets/js/angular.min.js"></script>
    <script src="assets/js/angular-route.js"></script>
    <script src="app/RoutingApp.js"></script>

    <script src="app/components/navbar/navbar_component.js"></script>
    <script src="app/components/home/home.js"></script>
    <script src="app/components/modal/modal.js"></script>
    <script src="app/components/footer/footer_component.js"></script>
    
    <script src="App/Components/RfiPreguntas/Formulario1/formulario1_component.js"></script>
    <script src="App/Components/RfiPreguntas/Formulario2/formulario2_component.js"></script>
    <script src="App/Components/RfiPreguntas/Formulario3/formulario3_component.js"></script>
    <script src="App/Components/RfiPreguntas/Formulario4/formulario4_component.js"></script>
    
    

    <script src="assets/js/jquery-2.1.4.js" type="text/javascript"></script>
    <script src="assets/js/bootstrap.js" type="text/javascript"></script>  
    <script src="assets/js/sweetalert-dev.js"></script>
    <script src="assets/js/MenuHamburguesaJS.js"></script>

    
    <script src="app/components/porquehidalgo/_porquehidalgo.js"></script>
    <script src="app/components/VentanillaUnica/VentanillaUnica.js"></script>
    <script src="app/components/SectoresEstrategicos/SectoresEstrategicos.js"></script>
    <script src="app/components/AgenciaPromocion/AgenciaPromocion.js"></script>
    <script src="app/components/infraestructuraIndustrial/InfraestructuraIndustrial.js"></script>
    <script src="app/components/RFI/RFI.js"></script>
    <script src="app/components/usuario/usuario.js"></script>
    <script src="Assets/js/jquery.slides.min.js"></script>
    <script>
        
    $(document).on('ready',function()
                  {
        
        var tam = $(document).width();
        $('.texto-tamano').text(''+tam);
        $('.texto-tamano').css('position','fixed');
        
    })  
    </script>
  
  
    <script>
    $(function() {
      $('#slides').slidesjs({
        width: 940,        height: 328,
        play: {
          active: true,
          auto: true,
          interval: 4000,
          swap: true
        }
      });
    });
  </script>
      
      
  </body>
</html>

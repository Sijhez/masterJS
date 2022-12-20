//jquery se usa en proyectos monoliticos: front end y backend unificados( larabel, symfony)
//en proyectos SPA (single page application), en el cual el backend esta separado, y solo consume datos de la API (USO DE ANGULAR), aqui ya no se usa tanto
 
//el $ se refiere al objeto jQuery
  //este es el selector, luego sigue el método ready
$(document).ready(function(){
           console.log("Estamos listos");
   //seleccion de elemento por ID
     //podemos cambiar los estilos usando metodo .css('propiedad','valor')
   $('#rojo').css('background','red').css('color', 'white')

   $('#amarillo').css('background','yellow').css('color','green')

   $('#verde').css('background','green').css('color', 'white')

   //selectores con class
   //var miClase= $('.zebra')
   //console.log(miClase.eq(1))//con este metodo seleccionamos un elemento de todas las clases
   //miClase.css('border', "5px dashed black" )

   $('.sin_borde').click(function(){
     console.log('click dado')
       $(this).addClass('zebra')
   })
//SELECTORES POR ETIQUETA
var parrafos = $('p').css('cursor','pointer')
  
parrafos.click(function(){
  var that = $(this);
  if(!that.hasClass('grande')){
    that.addClass('grande')
  }else{
    that.removeClass('grande')
  }
  
})
//SELECTOR POR ATRIBUTO:
   $('[title="Google"]').css('background','yellow').css('color','red')
   $('[title="Facebook"]').css('background','blue').css('color','white')

   //otros selectores:
    //  $('p, a').addClass('marg-sup');

    var busqueda = $('#caja').find('.resaltado') //el metodo .find nos permite buscar dentro del arbol del html para encontrar un elemento concreto dentro de otro
    //podemos usar .parent() para salir de un elemento al elemento mas "padre"
    console.log(busqueda)

 })

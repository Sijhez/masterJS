$(document).ready(function(){

    var cajita =$('#cajita')
    
   $('#mostrar').hide() 
   
   $('#mostrar').click(function(){
       $(this).hide()
       cajita.fadeTo('normal',1)//fadeTo ocupa dos parametros(velocidad, opacidad(0:transparente, 1:solido))
    $('#ocultar').show()
   })

   $('#ocultar').click(function(){
    $(this).hide()
    cajita.fadeTo('normal',0) //agrega una animacion sencilla
    $('#mostrar').show()    //se puede usar con show(), fadeIn y fadeOut(), fadeTo()
   })

   $('#todoEnUno').click(function(){
    cajita.toggle('fast', function(){ //se puede integrar un callback al final de una animacion
        alert('hola')
    }) //intercala entre un estado y el otro
   })              //.slideToggle
                   //.slideUp
                   //.slideDown 
  $('#animar').click(function(){
    cajita.animate({marginLeft:'500px',marginTop:'150px', fontSize:'40px', height:'120px'},'slow')
    cajita.animate({
      borderRadius:'100%',
      marginTop:'50px'
    },'fast')  
})
     
    

})
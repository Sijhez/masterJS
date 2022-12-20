$(document).ready(function(){
   //REALIZANDO PETICIONES CON AJAX:
   /*Ajax es una tecnologia que 
   permite hacer peticiones asíncronas al 
   servidor, y recoger la información sin 
   necesidad de recargar la pagina*/

   //METODO LOAD: recogemos el resultado de una peticion
   //$('#datos').load('https://reqres.in/');

   //METODOS GET Y POST:
   $.get('https://reqres.in/api/users',{page:2},function(response){
    response.data.forEach((element,index) => {
     $('#datos').append('<p>'+element.first_name+' '+element.last_name+'</p>')
    });
   })


//creando con formulario:
  $('#myForm').submit(function(event){
    event.preventDefault()
    var usuarioNew = {
        name:$('input[name="name"]').val(),
        mail:$('input[name="mail"]').val()
    }
    //console.log(usuarioNew)
          //aqui ya no ponemos toda la URL por que en el formulario se encuentra
//     $.post($(this).attr('action'),usuarioNew,function(response){
//        console.log(response)
//    }).done(function(){
//        alert('Usuario añadido bien')
//    })
//peticion a traves de $ajax
   $.ajax({
       type:'POST',
       url:$(this).attr('action'),
       data:usuarioNew,//objeto a enviar
       beforeSend:function(){
           console.log('Enviando usuario...')
       },
       success:function(response){
           console.log(response) //respuesta de confirmación
       },
       error:function(){
           console.log('A ocurrido un error')
       },
       timeout:10000 //tiempo en el que tardará maximo la peticion
    //    dataType:'json',
    //    contentType:'application/json',
   })

   return false
  })


   

})
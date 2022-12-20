$(document).ready(function(){
    //mover elementos por la pagina
   $('.elemento').draggable()

   //redimensionar elementos:
   $('.elemento').resizable()

   //SELECCIONAR ELEMENTOS:
    //$('.lista-seleccionable').selectable();

   //listar y ordenar elementos:si usamos sortable no podemos usar selectable al mismo tiempo
   $('.lista-seleccionable').sortable({
       update:function(event,ui){
        $('.lista-seleccionable li').each((element)=>{
            console.log($('.lista-seleccionable li')[element])
        })
       }
   });//si queremos, podemos guardar la posicion en que se queda
   
   //DROPPABLE: ARRASTRAR Y SOLTAR
   $("#elemento-movil").draggable()
   $('#area').droppable({
     drop:function(){
         console.log('has soltado algo dentro del área')
         $(this).css('background','#c5c5c5')
     },
     out:function(){
        console.log('lo sacaste del area')
        $(this).css('background','white')
     }
   })
 
   //efectos:
   $('#mostrar').click(function(){      //incluso se puede incluir un json para meter estilos nuevos 
       $('.cajaEfectos').toggle('slide',{},'slow') // blind / explode /fold /puff /scale /shake /slide
   })


})
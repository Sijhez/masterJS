$(document).ready(function(){
    // alert('funcionando')

    //EVENTOS MOUSEOVER
   var caja = $('#caja');
//    caja.mouseover(function(){
//        $(this).css('background','red')
//    })
//    caja.mouseout(function(){
//     $(this).css('background','green')
// })
   //EVENTO HOVER
    function cambiaRojo(){
        $(this).css('background','red')
    }
    function cambiaVerde(){
        $(this).css('background','green')
    }
          // mouse over / mouse out
   caja.hover(cambiaRojo, cambiaVerde)

   //EVENTO CLICK, DOBLECLICK
   caja.click(function(){
       $(this).css('background', 'blue')
               .css('color', 'white')
   })
   caja.dblclick(function(){
    $(this).css('background', 'pink')
            .css('color', 'black')
})

   //FOCUS Y BLUR:
 var nombre = $('#nombre')
 var datos =$('#datos')
   nombre.focus(function(){
     $(this).css('border', '2px solid green')
 })
 nombre.blur(function(){
    $(this).css('border', '1px solid #ccc')

    //extraer la informacion del input y incrustar provisionalmente el texto dentro de un div
    datos.text($(this).val()).show()
})
   //MOUSEDOWN (presionar el boton del mouse) Y MOUSEUP (soltar el boton)
 datos.mousedown(function(){
     $(this).css('border-color','red')
 })
 datos.mouseup(function(){
    $(this).css('border-color','yellow')
})
   //MOUSEMOVE: le da seguimiento al mouse cuando se mueve
   $(document).mousemove(function(){
       var sigueme = $('#sigueme')
       $('body').css('cursor', 'none') //desaparecemos el mouse
    //    console.log('En X:',event.clientX)
    //    console.log('En Y:',event.clientY)
       sigueme.css('left',event.clientX).css('top',event.clientY) //un elemento nos sigue al mouse
   })

})
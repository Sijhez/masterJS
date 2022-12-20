$(document).ready(function(){
    reloadLinks()
    // alert('hola mundo')
    //INCLUIR TEXTO EN EL DOM DEPENDIENDO EL ATRIBUTO
      // console.log($('a').length)
      $('#add').change(function(){
       // alert('writing')
         $('#addButton').removeAttr('disabled')
      })
    $('#addButton').click(function(){
        // $('#menu').html(`<li><a href=${$('#add').val()}></a></li>`)
           //.append() agrega el elemento al final, mientras que .prepend() lo agrega al inicio
        $('#menu').append(`<li><a href=${$('#add').val()}></a></li>`)//lo agrega solo a nivel frontend
        $('#add').val('') //limpiar el formulario
        reloadLinks()//recorrer de nuevo el array e imprimir el nuevo elemnto agregado
    })
      
    
})

function reloadLinks(){
    //.each()funciona para recorrer elementos indicados
    $('a').each(function(){
        var that = $(this) //apuntamos al objeto en ese momento del recorrido
        var enlace = $(this).attr('href') //apuntamos al atributo href de cada elemento que se esta recorriendo
        that.attr('target','_blank')
        

        that.text(enlace) //a cada objeto le añadimos como texto el atributo href que se extrajo
        //como resultado se imprime el texto que se tiene en cada valor
    })
}
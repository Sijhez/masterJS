'use strict'
//validacion de formulario con js
window.addEventListener('load',function(){
    // console.log('DOM CARGADO')
   var formulario = document.querySelector('#myForm')
   var box_dashed = document.querySelector('.dashed')
   box_dashed.style.display='none';


   formulario.addEventListener('submit', function(evento){
    evento.preventDefault()   
    console.log('evento submit cargado')

    // capturar info del formulario
    var nombre = document.querySelector('#nombre').value;
    var apellidos = document.querySelector('#apellidos').value;
    var edad = parseInt(document.querySelector('#edad').value);  
    
    if(nombre.trim() ==null || nombre.trim().length ==0 ){
        //escribimos una alerta si el usuario no puso su nombre
        document.querySelector('#error_nombre').innerHTML = 'El nombre no es valido'
        alert('el nombre no es valido')
        return false; //esto evita que lo demás se ejecute
    }else{
        document.querySelector('#error_nombre').style.display = 'none'
    }

    if(apellidos.trim() ==null || apellidos.trim().length ==0 ){
        document.querySelector('#error_apellido').innerHTML = 'El apellido no es valido'
        alert('los apellidos no son valido')
        return false;//esto evita que lo demás se ejecute
    }else{
        document.querySelector('#error_apellido').style.display = 'none'
    }
    //si la edad es null, o es menor o igual a cero, o no es un numero(isNaN)
    if(edad ==null || edad <=0 || isNaN(edad) ){
        document.querySelector('#error_edad').innerHTML = 'la edad no es valida' 
        alert('la edad no es valida')
        return false;//esto evita que lo demás se ejecute
    }else{
        document.querySelector('#error_edad').style.display ='none'
    }
    //si se cumple todo, pintamos el recuadro con los datos del usuario
    alert(`${nombre} ${apellidos} de ${edad} años`)
    box_dashed.style.display='block';

    //forma3:
    var p_nombre = document.querySelector('#p_nombre span')
    var p_apellidos = document.querySelector('#p_apellidos span')
    var p_edad = document.querySelector('#p_edad span')
    p_nombre.innerHTML = nombre;
    p_apellidos.innerHTML =apellidos;
    p_edad.innerHTML = edad;

//forma2
    // var datos_usuario=[nombre, apellidos, edad]
    // var indice;
    // for(indice in datos_usuario){
    //     var parrafo = document.createElement("p")
    //     parrafo.append(datos_usuario[indice])
    //     box_dashed.append(parrafo)
    // }
//forma1
    //imprimir info del usuario en el div que creamos:
    // parrafo.append(nombre)
    // parrafo.append(apellidos)
    // parrafo.append(edad)
    // //metemos en el box:
    // box_dashed.append(parrafo)

    //window.location.href = 'http://www.google.com'

})

})
'use strict'
// ACCEDIENDO AL DOM
// getElementById
var textBox = document.getElementById('miCaja') //accedemos al texto dentro del elemento
//var textBox = document.querySelector('#miCaja') otra forma de acceder con selector universal
function cambiaColor(myColor){
    // var myColor = prompt('cambia el color de la caja')
    textBox.style.background = myColor
    // while(myColor !=='no'){
    //     myColor = prompt('seguir cambiando el color?')
    // }
}


textBox.innerHTML = "¡TEXTO NUEVO DEL ELEMENTO!"
textBox.style.background = "red"
textBox.style.padding = "20px"
textBox.style.color = "white"
textBox.classList ='hola' //agregar una clase
console.log(textBox)

// cambiaColor();
//setInterval(cambiaColor, 3000)

//SELECCION DE ELEMENTOS POR ETIQUETA
var todosLosDivs =document.getElementsByTagName('div');
console.log(todosLosDivs)

//todosLosDivs.forEach((valor,index) => {
    var seccion = document.querySelector('#mySection')
    var linea = document.createElement('hr')
    
    var valor;
  for(valor in todosLosDivs){
     if(typeof todosLosDivs[valor].textContent =='string'){
        var parrafo = document.createElement('p'); //se crea el elemento parrafo
        var texto = document.createTextNode(todosLosDivs[valor].textContent);//recogemos el valor
        parrafo.appendChild(texto)//integramos el valor del texto y lo metemos como hijo de parrafo
        seccion.appendChild(parrafo)
        
     }
     seccion.appendChild(linea)
  }
  
//});

//seleccionando por class
var divRojos = document.getElementsByClassName('rojo');
var divAmarillos = document.getElementsByClassName('amarillo');
var div;
for(div in divRojos){
    if(divRojos[div].className==='rojo'){
        divRojos[div].style.background = 'red'
    }
}
for(div in divAmarillos){
    if(divAmarillos[div].className==='amarillo'){
        divAmarillos[div].style.background = 'yellow'
    }
}
// console.log(divRojos)
//querySelector solo captura un elemento, SE PUEDEN CAPTAR VARIOS CON querySelectorAll()
//get ElEMNTS


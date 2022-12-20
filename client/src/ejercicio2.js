'use strict'

/*Usando un bucle, mostrar la suma y la media de los numeros introducidos, hasta
introducir un numero negativo, y ahí mostrar el resultado */

var suma = 0
var contador = 0;

do {
    var numero=parseInt(prompt("introduce numeros hasta que metas uno negativo", 0))
    //ejecuta primero lo que esta dentro del do, es decir, requerir primero el numero

    //evaluar la validez del numero
     if(isNaN(numero)){
         numero = 0;
     }else if(numero>=0){
         suma += numero;
         contador++;
     }
     console.log(suma)
     console.log(contador)
    //  alert(resultado)
} while (numero >= 0);//si se cumple, se ejecuta lo de adentro
var resultado = suma / contador
alert(`La suma de todos los numeros es ${suma}`)
alert(`La media de los numeros es ${resultado}`)
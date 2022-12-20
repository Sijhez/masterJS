'use strict'

/*mostrar todos los numeros divisores de un numero introducido en prompt */

var numero = parseInt(prompt("mete un numero",1))

for(let i=1; i<=numero; i++ ){
     if(numero%i==0){
        console.log(`Un divisor del numero sería:${i}`)
     }

  
}
'use strict'

/*hacer un programa que nos diga si un numero es par o impar :
1: ventana prompt
2: si no es valido, que nos pida el numero de nuevo
*/

var number = parseInt(prompt("introduce un numero",0));

while(isNaN(number)){
    number = parseInt(prompt("introduce un numero",0));
}
while(number == 0){
    number = parseInt(prompt("introduce un numero",0));
}

if(number%2 ==0){
    alert(`El numero ${number} es un numero par`)
}else{
    alert(`El numero es impar`)
}
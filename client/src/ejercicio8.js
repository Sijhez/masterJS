'use strict'
/*calculadora: 
pedimos dos numeros por pantalla
si metemos uno mal que nos lo vuelva a pedir
en el cuerpo de la pagina, en una alerta, y por la console, el resultado de sumar, restar, multiplicar y dividir esas dos cifras
*/

var primerNumero = parseInt(prompt("Introduce el primer numero",0))
var segundoNumero = parseInt(prompt("Introduce el segundo numero",0))

while(primerNumero<0 || segundoNumero<0 || isNaN(primerNumero) ||isNaN(segundoNumero)){
    primerNumero = parseInt(prompt("Introduce el primer numero",0))
    segundoNumero = parseInt(prompt("Introduce el segundo numero",0))
}
var resultado = `la suma de los numeros es ${primerNumero + segundoNumero},</br>
                la resta de los dos numeros es ${primerNumero - segundoNumero},</br>
                la multiplicacion de los dos numeros es ${primerNumero*segundoNumero},</br>
                y la division delos dos numeros es ${primerNumero/segundoNumero}`;

                document.write(resultado)
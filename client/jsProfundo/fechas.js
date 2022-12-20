'use strict'
//TRABAJANDO CON FECHAS:
//generamos un nuevo objeto date
var fecha = new Date()

var year = fecha.getFullYear()
var month =fecha.getMonth()
var day = fecha.getDate()
var hour = fecha.getHours()
//generar el texto, hora o dia, o mes de la fecha:
var textoHora=`Es el día ${day} del mes ${month} del año ${year} y son las ${hour} horas`

console.log(textoHora)

//OPERACIONES MATEMATICAS
Math.random() //Muestra un numero aleatorio entre 0 y 1
Math.ceil()//cierra el numero quitando los decimales
.min()
.max()//operadores para conseguir el minimo y maximo
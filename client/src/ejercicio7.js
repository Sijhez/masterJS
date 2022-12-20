'use strict'

//tabla de multiplicar de un numero introducido por pantalla

var number = parseInt(prompt("De que numero quieres la tabla?",1))

document.write(`<h1> la tabla del ${number} </h1> `)
for(let i=1; i<=10; i++){
   document.write(`<h2> ${number}*${i} = ${number*i} </h2>`);
}
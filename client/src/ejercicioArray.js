'use strict'
/*
1.- integrar 6 numeros por pantalla y se metan en un array
2.- mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola
3.- ordenarlo y mostrarlo
4.- invertir su orden y mostrarlo
5.- mostrar cuantos elementos tiene el array
6.- busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su índice:

*/

function mostrarArray(elementos, textoCustom){
    document.write(`<h1>Contenido del array ${textoCustom}</h1>`)
    document.write("<ul>")
    elementos.forEach((elemeto, index)=>{
    document.write(`<li> ${elemeto}</li>`)
})
document.write("</ul>")
}

var numeros =new Array(6);//array delimitado a 6 elementos
for(let i=0; i<=5; i++){//en cada iteración pedimos un numero al usuario, cada numero se integra al array
   numeros[i] = parseInt(prompt('Introduce un numero',0)) //convertir con parse int para pasar el texto como número 
   //se puede hacer tambien con .push
   //numeros.push( parseInt(prompt('Introduce un numero',0)) ) 
}
//primero recibimos los numeros, luego los integramos a la funcion
mostrarArray(numeros)

document.write(`<h1>Contenido del array</h1>`)
numeros.forEach((numero, index)=>{
    document.write(`<strong> ${numero}</strong><br>`)
})
console.log(numeros)

//ordenamos el array:
numeros.sort((a,b)=>a-b)
mostrarArray(numeros,'ordenados') //imprimimos el array ordenado en la pagina
console.log(numeros)

numeros.reverse()
mostrarArray(numeros,'revertidos')

//cuantos elementos tiene el array?
document.write(` <h1>El Array tiene ${numeros.length} elementos.</h1> `)

//busqueda de un valor sugerido por el usuario:
var busqueda = parseInt(prompt('Buscar un numero',0))
var posicion = numeros.findIndex(numero => numero == busqueda ) //se ubica el index del valor ingresado, si existe en el array
if(posicion && posicion!=-1){
    document.write("<h1>ENCONTRADO</h1>")
    document.write(`<h2>El número ${busqueda} esta en la posicion ${posicion}</h2>`)
}else{
    document.write(`<h1>EL NUMERO ${busqueda} NO FUE ENCONTRADO</h1>`)
}
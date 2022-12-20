'use strict'

//arrays, arreglos o matrices

var nombre = "Sinuhe Jardinez"
var nombres = ["Pepe", "Juan", "Mario", "Lucía", "Alejandro", "Pancho", "Jacinto"]

//descomentar para usar el includes XD
//var elemento = prompt("Que elemento del array quieres??")
// if(nombres.includes(elemento)){
//     alert(`Seleccionaste a ${elemento}`)
// }else if(!(nombres.includes(elemento))){
//     alert("seass mamon, y escribe bien")
// }

//iteracion de array
nombres.forEach((element, index) => {
    document.write(`<h3>${index+1}: ${element}</h3>`)
});


//ARRAYS MULTIDIMENSIONALES: arrays dentro de otros arrays
//arrays dentro de otros arrays
var categorias = ['Accion','Terror','Comedia']
var peliculas = ['La verdad duele',' La vida es bella', 'Gran Torino']

var cine = [categorias,peliculas]
console.log(cine[0][1])//retorna al array de la posicion 0, con el index del elemento 1
            //retorna Terror

//OPERACIONES CON ARRAYS
peliculas.push('Batman'); //añade el elemento que querramos al array
console.log(peliculas)

 var newMovie = " "
// do{
//     newMovie = prompt('Introduce tu pelicula')
//     peliculas.push(newMovie)
// }
// while(newMovie !=="ACABAR");

peliculas.pop()//eliminar el último elemento, en este caso la palabra ACABAR para cortar el prompt

//para eliminar un  elemento en especifico del array:
//debemos buscar el índice del elemento
var indice = peliculas.indexOf('La verdad duele')
//hacer un splice() en donde indicamos (indice desde donde vamos a comenzar a borrar, cuantos elementos se van a borrar)
if(indice > -1){ //el numero -1 indica cuando no se ha encontrado el elemento de un array, es decir, aqui le decimos que, sea cual sea el índice, debe EXISTIR dentro del array, desde 0 hasta x numero de elementos del array
    peliculas.splice(indice,1)
}console.log(peliculas);
//CONVERTIR EL ARRAY A TEXTO
var peliculasString = peliculas.join(',')
console.log(peliculasString);

var peliculasNew = ['La verdad duele','La vida es bella', 'Gran Torino', 'ABC del amor']
peliculasNew.sort()//ordena el array alfabéticamente
console.log(peliculasNew)
peliculasNew.reverse()//ordena el array alreves a como estaba
console.log(peliculasNew)

//RECORRIENDO EL ARRAY CON for-in
//recorre con indices
for (const pelicula in peliculasNew) {
    document.write("<li>"+peliculasNew[pelicula]+"</li>")
}

//BUSQUEDAS EN ARRAYS
//en una busqueda de este tipo usamos return para retornar un resultado esperado
var buscarPeli = peliculasNew.find(function(pelicula){
    return pelicula === "Hard Die"//devuelve undefined por que no existe en el array
})
console.log(buscarPeli)
//podemos acortarlo con funcion de flecha:
var busquedaPeli2 = peliculasNew.find(miPeli => miPeli=="Gran Torino");//en esta funcion no es necesario agregar return, la funcion de flecha lo incluye
console.log(busquedaPeli2)
//busqueda de indices
var busquedaPeli3 = peliculasNew.findIndex(miPeli => miPeli=="Gran Torino");//en esta funcion no es necesario agregar return, la funcion de flecha lo incluye
console.log(busquedaPeli3)

//COMPROBACIONES CON NUMEROS:
var precios = [15, 25, 45, 80, 60];
var comprobarNumero = precios.some(unPrecio =>unPrecio >=90) //el método some() ayuda a hacer una comprobación de tipo boleano, que verifica la condición de un numero
console.log(comprobarNumero)
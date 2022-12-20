'use strict'

//uso de JSON (JAVASCRIPT OBJECT NOTATION): Son objetos en javascript
//son arrays asociativos dentro de JAVASRIPT y permiten asociar objetos de forma eficiente y rapida

var pelicula = {
     //propiedades de la pelicula
     titulo: 'batman vs superman',
     year:2017,
     pais:'Estados Unidos'
}
//cambiando propiedad
pelicula.titulo = 'Superman Begins'
//agregando una propiedad
pelicula.director = 'un chango'
//MONGO DB almacena así los datos, no en tablas
console.log(pelicula)

var peliculas = [
    {titulo:'la verdad duele', year:2016,pais:'Francia'},
    pelicula
]
let cajaPeliculas = document.querySelector('#lista')
let index;
for (index in peliculas) {
    var tituloPeli = document.createElement('li')
    //accedemos a la propiedad de cada elemento que existe en el arreglo
    tituloPeli.append(peliculas[index].titulo + '-'+ peliculas[index].year)
    cajaPeliculas.appendChild(tituloPeli)
}

//USANDO LOCAL STORAGE !!
//podemos almacenar informacion en el navegador a manera de sesion
//esta informacion persiste y se queda mientras el usuario navega a lo largo del sitio

//comprobando si el navegador tiene localStorage
if(typeof(Storage) !== 'undefined'){
    console.log('Local Storage disponible')
}else{
    console.log('Local Storage no esta disponible')
}

//guardando datos en el local storage:
localStorage.setItem('Titulo','Curso de ANGULAR PARA SABER MAS')

//RECUPERANDO ELEMENTO:
// alert(localStorage.getItem('Titulo'))

//GUARDAR OBJETO EN EL LOCAL STORAGE
var usuario ={
    nombre:'Sinuhe Jardinez',
    mail:'sinuhe.jh@gmail.com',
    edad:29
};//no podemos almacenar directamente un objeto, solamente STRING, por el envío de datos http
//podemos convertir el objeto JSON en un objeto en string:
//usando JSON.stringify podemos almacenar la info del objeto del local storage
localStorage.setItem('usuario',JSON.stringify(usuario))

//recuperar el objeto del localstorage
var miUsuario = JSON.parse(localStorage.getItem('usuario'))
console.log(miUsuario)
//imprimiendo informacion del local storage, ya parseada del JSON
cajaPeliculas.append(' '+miUsuario.nombre+'-'+miUsuario.mail)

//remover elemento del local storage
localStorage.removeItem('usuario')

//limpiar todo el localstorage
localStorage.clear()
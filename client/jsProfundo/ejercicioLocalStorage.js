'use strict'

var formulario = document.querySelector('#formPeliculas')
formulario.addEventListener('submit', function(){
  //agregamos un elemento o varios elementos al local storage
   var titulo = document.querySelector('#addPelicula').value
   if(titulo.length>=1){
    localStorage.setItem(titulo, titulo)//el primero se almacena como keyword, el segundo como su valor
   }
})

var lista = document.querySelector('#peliculasList')
//variable i declarada aqui
for (var i in localStorage) {
    console.log(localStorage[i])
    if(typeof localStorage[i]=='string'){
        var peli=document.createElement('li')
        peli.append(localStorage[i])
        lista.append(peli)
    }
}

var formularioBorrado = document.querySelector('#borrarPelicula')
formularioBorrado.addEventListener('submit', function(){
  //agregamos un elemento o varios elementos al local storage
   var titulo = document.querySelector('#quitarPelicula').value
   if(titulo.length>=1){
    localStorage.removeItem(titulo)
   }
})


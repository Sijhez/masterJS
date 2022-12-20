'user strict'
//TRABAJANDO CON BOM(browser object model)
//mide el ancho y alto del navegador
//con el evento load puedes cargar los scripts despues que el window ha cargado
window.addEventListener('load', function(){


console.log(`Alto de la pantalla: ${window.innerHeight} px`)
console.log(`Ancho de la pantalla: ${window.innerWidth} px`)

function getBom(){
    //mide el ancho y alto de la pantalla
    alert(`El ancho de la pantalla es:${screen.width} y el
    alto de la pantalla es:${screen.height}`)
}
getBom()

console.log(window.location) //conseguir localización del window

function redirect(url){
    window.location.href =url
}
function abrirVentana(url){
    window.open(url, "", "width=1000, height=500")
}

//EVENTOS: funcion que se ejecuta cuando el usuario hace algo en la pagina

var boton = document.querySelector("#boton")
function cambiarColor(){
    
    var bg = boton.style.background;

    if(bg == 'green'){
        boton.style.background = 'red'
        boton.style.color="white"
        boton.style.border = "none"
        boton.style.padding = '10px'
    }else{
        boton.style.background = 'green'
        boton.style.color="white"
        boton.style.border = "none"
        boton.style.padding = '10px'
    }
}
//usando addEventListener con click
boton.addEventListener('click',function(){
    boton.textContent = "Cambiaste el color"
    cambiarColor()
    //usando el operador this
    this.style.border = '5px solid red'
    console.log(this)
})

//usando mouseOver
boton.addEventListener('mouseover', function(){
    boton.style.background='#c5c5c5'
})

//usando mouseOut
boton.addEventListener('mouseout', function(){
    boton.style.background='black'
})

var input = document.querySelector('#campo_nombre')

//EVENTO FOCUS
input.addEventListener('focus', function(){
    console.log('estas dentro del input')
    input.style.border='2px solid green'
})

//EVENTO BLUR
input.addEventListener('blur', function(){
    console.log('estas fuera del input')
    input.style.border='2px solid red'
})

//EVENTO KEYDOWN
input.addEventListener('keydown', function(event){
    console.log(`Pulsando tecla ${String.fromCharCode(event.keyCode)}`)
})
//EVENTO KEYPRESS
input.addEventListener('keypress', function(event){
    console.log(`Tecla presionada ${String.fromCharCode(event.keyCode)}`)
})

//EVENTO KEYUP
input.addEventListener('keyup', function(event){
    console.log(`Tecla soltada ${String.fromCharCode(event.keyCode)}`)
})
    
})

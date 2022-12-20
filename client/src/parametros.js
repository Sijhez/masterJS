'use strict'
//PARAMETROS REST Y SPREAD
                                     //parametro de tipo REST
function listadoFrutas(fruta1, fruta2, ...restoFrutas) {
    console.log(`Fruta1: ${fruta1}`)
    console.log(`Fruta2: ${fruta2}`)
    console.log(restoFrutas)
}

listadoFrutas("Naranja","Manzana", "Sandia", "Pera", "Melón", "Coco")

var frutas = ["Naranja","Manzana"]
          //uso de SPREAD para acceder a cada indice del array
listadoFrutas(...frutas, "Sandia", "Pera", "Melón", "Coco")


//FUNCIONES ANONIMAS
//es una funcion qeu no tiene nombre solamente
//se usa comumnente con callbacks
// var pelicula = function(nombrePeli){
//      return `la pelicula es ${nombrePeli}`
// }

//FUNCION DE CALLBACKS
function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2
    sumaYmuestra(sumar)
    sumaPorDos(sumar)
    return sumar
  }

  sumame(5,7, (dato) =>{
       console.log(`La suma es ${dato}`)
  }, (dato)=> {
      console.log(`La suma por dos es: ${dato*2}`)
  } )

  //FUNCION DE FLECHA
  var myFunction = () =>{
    alert("Probando funcion")
  }
  myFunction()

  //AMBITO o alcance DE LAS VARIABLES
const holaMundo = (texto) =>{
  console.log(texto)
  console.log(numerox)
  let hola_mundo = "texto dentro de funcion"
  console.log(hola_mundo)
}
var numerox = 12;
var texto = "Hola, soy variable global"

holaMundo(texto)
//console.log(hola_mundo)//si la variable no esta declarada de forma global, no se puede acceder a ella de forma externa

//METODOS PARA PROCESAR TEXTOS
var numero=444
var texto1 = "Bienvenido al curso de JS"
var texto2 = "Es un buen curso"

//para volver el numero a string:
 console.log (typeof(numero.toString()))

 
 var dato = texto1.toUpperCase()//cambiar el texto a mayúsculas
     dato = texto1.toLowerCase()//cambiando a minusculas         
 console.log(dato)
 console.log(`el numero de caracteres de la frase de arriba es ${dato.length} caracteres`)//length ayuda a contar caracteres o elementos dentro de un array
//concatenando texto
 var textoTotal = texto1.concat(` ${texto2}`)
 alert(textoTotal)

//BUSCAR PALABRAS DENTRO DE UN STRING
var busqueda = textoTotal.indexOf("curso") //tambien existe .lastIndexOf()
console.log(busqueda)

var texto3 = "Esta es una frase para checar una caracteristica que nos esta contando Victor Robles de Udemy"
var buscar = texto3.match("frase")

console.log(buscar)
console.log(`la palabra es ${texto3.substr(12,5)}`)
console.log(`podemos sacar una letra con .charAt ${texto3.charAt(5)}`)
console.log(` podemos comprobar si el string comienza con una palabra con .startsWith como ${texto3.startsWith("Esta")} `)
console.log(`Podemos comprobar si una palabra existe con .includes(palabra a buscar), y devuelve un boleano ${texto3.includes("frase")}`)

var texto4 = "En esta frase vamos a reemplazar texto usando .replace()"
console.log(texto4)
console.log(texto4.replace("vamos a reemplazar", "ya reemplazamos"))

var formatText = "    Hola a todos, estoy formateando texto    "
console.log(`Texto original: ${formatText}`)
console.log(`Texto recortado con slice: ${formatText.slice(5,13)}`)
console.log(`Texto como array:`, formatText.split(' '))
console.log(`Texto formateado con trim: ${formatText.trim()}`)//este metodo elimina espacios a los lados del string

//una plantilla de texto

var tuNombre = prompt("Pon tu nombre, bro")
var tuApellido = prompt("Pon tu apellido, bro")
//usando comillas inversas o backticks generamos una plantilla de texto con JS
var textoCompleto = `<h1> Hola,</h1> </br> <h2>yo soy ${tuNombre.concat(" "+tuApellido)}</h2>`
document.write(textoCompleto)


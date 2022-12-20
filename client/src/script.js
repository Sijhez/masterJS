'use strict'
//modo estricto en JS
//obliga a declarar adecuadamente las variables


//haciendo un hola mundo
// document.write("Quepedo morros")

//uso de variables
let pais='México'
let continente = 'América'
let sentencia = `mi pais es ${pais} y el continente es ${continente}`

//alert( sentencia)

pais = 'Inglaterra'
continente = 'Europa'

//alert( `mi pais es ${pais} y el continente es ${continente}`)

//en ES6 ahora se puede usar el uso de var y let, pero var funciona de manera global, mientras que let solo funciona de manera de bloque

//usando var
var estado = 'Estoy bien'
console.log(estado);

if(true){
    var estado = 'Estoy chiro :( '
    console.log(estado);
}
//aqui el valor ya se quedó con el cambio anterior
console.log(estado);

//usando let

let newEstado = 'Esta es una prueba'
console.log(newEstado);

if(true){
    let newEstado = 'Esta es una nueva prueba '
    console.log(newEstado);
}
//aqui el valor regreso al que se hizo anteriormente

console.log(newEstado);

//USO DE CONST
//la variable const permanece constante, y su valor no puede ser modificado
var number = 0
var text = document.querySelector("#counter")
var text2 = document.querySelector("#minutes")
var number2 = 1

let counter = setInterval(()=>{
    text.innerHTML= number++
   //console.log(number++)

   
   if(number >= 60){
    text2.innerHTML = number2++
    number=0
   }
}, 1000)

//operadores lógicos
// && and
// || or
// ! negative

let miEdad = 40

alert(`Tienes ${miEdad} años de edad`)

if(miEdad > 18 && miEdad < 30){
   alert("Eres un millenial mayor de edad")
}else if(miEdad >= 30  && miEdad <= 39){
    alert("Eres un señor, ya cásate")
}else if( miEdad >= 40){
    alert("Crisis de los 40´s")
}else{
    alert("edad no identificada")
}

//USO DE SWITCH
//color semaforo

const randomNumber = Math.ceil(Math.random()*3)
var imprime = ""

if(randomNumber == 1 ){
    var semaforo = "rojo"
}else if(randomNumber == 2){
    var semaforo = "amarillo"
}else if(randomNumber == 3){
    var semaforo = "verde"
}

switch(semaforo){
    case "rojo":
        imprime = `El color es ${semaforo}, no puedes avanzar`
        break;
    case "amarillo":
        imprime =`El color es ${semaforo}, empieza a frenar`
        break;
    case "verde":
        imprime = `El color es ${semaforo}, puedes avanzar`
        break;
    default:
        imprime = `El semaforo no sirve`;
        break;
}
alert(imprime);

//BUCLES O LOOPS
//BUcle for
let limite = 100
for(let i=0; i<=limite; i++){
   console.log(i);
   //debugger para crear un paso de interrupción para ver funcionamiento en console
}

//bucle While
var year=2021;
while (year >=  1992) {
    //ejecutar lo siguiente
    console.log(`Estamos en el año ${year}`)
    year--;
}

//bucle do while
var years=20;

do {
    alert(`El numero es ${years}`)
    years++ 
    //podemos usar un break junto una condicional si queremos que el loop se detenga en algun punto antes de cumplir la condicional
    if(years>23){
        break
    }
} while (years <= 25);






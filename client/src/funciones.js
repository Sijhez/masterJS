'use strict'
//funciones
// Es una agrupación reutilizable de un conjunto de instrucciones para ejecutar

var miNombre = "Sinuhe"
var miApellido = "Jardínez"

//usando parametros chidos
function presentacion(nombre,apellido){
    let presentacion = `Hola, yo soy ${nombre} ${apellido}, y soy el que programa`
    return presentacion
}
//invocar o llamar a la funcion para que funcione
//mandamos llamar la funcion metiendo los parametros que quiera
alert(presentacion(miNombre, miApellido))

var usuario = prompt("Quién eres tú?",'nombre aqui')
  
function quienEres(nombreUsuario){
   alert(`Bienvenido amigo ${nombreUsuario}`)
}
quienEres(usuario)


//FUNCIONES DENTRO DE OTRAS FUNCIONES
function porConsola(numero1, numero2){
    console.log(`Suma: ${numero1+numero2}`);
    console.log(`Resta: ${numero1-numero2}`);
    console.log(`Multiplicación: ${numero1*numero2}`);
    console.log(`División: ${numero1/numero2}`);
   

}
function porPantalla(numero1, numero2){
    document.write(`Suma: ${numero1+numero2}</br>`);
    document.write(`Resta: ${numero1-numero2}</br>`);
    document.write(`Multiplicación: ${numero1*numero2}</br>`);
    document.write(`División: ${numero1/numero2}</br>`);
    

}
                                       //usamos una variable que ya existe
function calculadora(numero1, numero2, mostrar = false){

    if (mostrar == false) {
        porConsola(numero1, numero2)
    }else{
       porPantalla(numero1, numero2)
    }
    return true
}
calculadora(12,5)
//si mandamos llamar la funcion con el parametro extra con la bandera cambiada, la funcion realiza la otra instruccion
calculadora(3,5, true)

        // for (var i=1; i<10; i++){
        //     console.log(i)
        //     calculadora(i,8)
        // }


'use strict'
//uso de try catch: es un verificador de prueba y error

try {
  var year = 2019
  alert(year) //si el codigo genera algun error, se captura
  //metodo para decodificar URL
  console.log(decodeURIComponent("https://victorroblesweb.es"))
  //si la URL o el código contenido aqui es erroneo, se muestra el error
  var myArray = new Array (1999191919919199991991)//aqui muestra un error, por que el array es muy largo
  console.log(myArray)
} catch (error) {
    alert('ha ocurrido un error en el codigo')
    console.log(error)
}


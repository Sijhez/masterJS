'use strict'

//este evento activa las funciones una vez que el window se haya cargado
window.addEventListener('load', function(){
    
    //timers: set interval ejecuta despues de cada cierto tiempo
   function intervalo(){
    var tiempo = setInterval(function(){
        console.log('Set interval ejecutado')
        //se pueden cambiar estilos y demas
        var encabezado = document.querySelector('h1')
        if(encabezado.style.fontSize=='70px'){
            encabezado.style.fontSize='30px'
        }else{
            encabezado.style.fontSize='70px'
        }
    }, 2000)
    return tiempo
   }
   var tiempo=intervalo()
    //usando setTimeOut: se ejecuta despues de un tiempo, y ya no se vuelve a ejecutar
    setTimeout(function(){
        alert('acaban de pasar 5 segundos')
    },5000)//se miden en milisegundos

    var stop = document.querySelector('#myBoton')
    stop.addEventListener('click',function(){
        alert('has detenido el intervalo')
        clearInterval(tiempo)//detenemos el intervalo de tiempo que ejecuta arriba
    });

    var startBtn = document.querySelector('#start')
    startBtn.addEventListener('click', function(){
        alert('has iniciado el intervalo')
        intervalo()
    })

});
'use strict'
//usando el metodo fetch (sustituto de peticion ajax) para consumir API's rest
var divUsuarios = document.querySelector('#usuarios')
//para mostrar un usuer
var divJanet = document.querySelector('#janet')
var divProfesor = document.querySelector('#profesor')
var divGeorge = document.querySelector('#george')
var usuarios =[]
//'https://jsonplaceholder.typicode.com/users'

getUsuarios()//primer promesa
 .then(data=>data.json())//convertimos la data que recibimos en objeto json
 .then(users =>{
     listadoUsuarios(users.data)
     return getInfo()//llamamos con el callback a la nueva promesa que esta abajo
    
 })
 .then(data =>{
     //para acceder a la info del JSON stringify usamos parse, si no solo lo imprimimos como string
    //  var profe = JSON.parse(data)
    //  console.log(profe)
    divProfesor.innerHTML = data
    return getJanet();
 })//encadenamos a la nueva promesa


 .then(data=>data.json())
 .then(user=>{
     mostrarJanet(user.data)
     return getGeorge();

    })
.then(data=>data.json())
.then(user=>{
    mostrarGeorge(user.data)
})
  //si se presentara algun error, podemos usar .catch()
  .catch (error =>{
      alert('error en las peticiones') //mostrar una alerta personalizada
      console.log(error)//mostar error 
  })

  
 

 function getUsuarios(){
     return fetch('https://reqres.in/api/users')
 }

 function getJanet(){
    return fetch('https://reqres.in/api/users/2')
}

function getGeorge(){
    return fetch('https://reqres.in/api/users/1')
}

//manejo de mas promesas:
function getInfo(){
    var profesor ={
        nombre:'Victor',
        apellidos:'Robles',
        url:'https://victorroblesweb.es'
    }
    return new Promise((resolve, reject)=>{
    
        var profesor_string = ""
        //despues de 3 segundos se hace el llamado y cumplimiento de promesa
        setTimeout(function(){
            profesor_string =JSON.stringify(profesor)
            if(typeof profesor_string != 'string' || profesor_string =='' )return reject('error1')//negamos la promesa si no se hizo bien
       
            return(resolve(profesor_string))//si se resuelve la petición, se accede a la información
        },3000);
      });
    
   
}

 function listadoUsuarios(usuarios){
    usuarios.map((user,i)=>{
        console.log(`${i}:${user.first_name} ${user.last_name}`)
        
        let userNombre = document.createElement('h3')
        userNombre.innerHTML=`${i}: ${user.first_name} ${user.last_name}`;
       
        divUsuarios.appendChild(userNombre)
        document.querySelector('.loading').style.display='none'
    })
 }

 function mostrarJanet(user){
       
        let userNombre = document.createElement('h4')
        let avatar =document.createElement('img')
        userNombre.innerHTML=`${user.first_name} ${user.last_name}`;
       avatar.src = user.avatar;
      
       avatar.width='100';
        divJanet.appendChild(userNombre)
        divJanet.appendChild(avatar)

        document.querySelector('#janet .loading').style.display='none'
    
 }

 function mostrarGeorge(user) {
    let userNombre = document.createElement('h4')
    let avatar = document.createElement('img')
    userNombre.innerHTML = `${user.first_name} ${user.last_name}`;
    avatar.src = user.avatar;
    avatar.width = '100'; 
    divGeorge.appendChild(userNombre)
    divGeorge.appendChild(avatar)
    document.querySelector('#george .loading').style.display = 'none'

 }


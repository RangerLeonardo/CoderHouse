const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const password = document.getElementById("password")

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("inicio").addEventListener("inicio",alert("Usuario: correo@correo.com   password: 12345"));
})

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("formulario-crear").addEventListener("submit",validarCuenta);
})

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("formulario-login").addEventListener("submit",iniciarSesion);
})



function validarCuenta(){
    if(nombre.value=="" || email.value=="" || password.value==""){
        alert("Ingresa todos los datos")
    }
    
}

function iniciarSesion(){
    if(email.value!="correo@correo.com" || password.value!="12345"){
        alert("User o contraseña Incorrecto")
    }else{
        for (let index = 0; index < 1; index++) {
            alert("Lo hiciste bien ahora prueba a invalidar el crear cuenta")            
        }
        alert("Correcto, pero aún no hay nada más, así que aquí nos quedamos")

    }
}


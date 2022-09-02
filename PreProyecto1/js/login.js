const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const password = document.getElementById("password")

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
    if(email.value = "" || password.value == ""){
        alert("User o contraseña Incorrecto")
    }
}


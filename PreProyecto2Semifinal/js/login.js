const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const password = document.getElementById("password")
const login = document.getElementById("login")
const confirmarEmail = localStorage.getItem("usuario")
const confirmarPassword = localStorage.getItem("password")


console.log(confirmarPassword)

login.addEventListener("click",function(){
    if(email.value = "" || password.value == ""){
        alert("User o contraseña Incorrecto")
    }
    if(email.value==confirmarEmail || password.value==confirmarPassword ){
        window.location.href="/hotdogs.html"
    }else{
        alert("Correo o Contraseña Incorrecta")
        email.value=""
    }
})



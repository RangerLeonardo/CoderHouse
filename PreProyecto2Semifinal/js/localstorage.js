const email = document.getElementById("email");
const password = document.getElementById("password");
const nombre = document.getElementById("nombre");
const guardarDatos = document.getElementById("crearCuenta");

guardarDatos.addEventListener("click",function(){
    if(nombre.value=="" || email.value=="" || password.value==""){
        alert("Ingresa todos los datos")
    } else{
        localStorage.setItem("usuario",email.value);
        localStorage.setItem("password",password.value);
        localStorage.setItem("nombre",nombre.value);
        console.log(localStorage)
    }

})


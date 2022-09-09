document.getElementById("nombre").addEventListener("focus",(evento)=>{
    evento.target.style.background="red";
});
document.getElementById("nombre").addEventListener("blur",(evento)=>{
    evento.target.style.background="white";
});

document.getElementById("apellido").addEventListener("focus",cambiar);
document.getElementById("apellido").addEventListener("blur",regresar);


function cambiar(evento){
    evento.target.style.background="green";
}

function regresar(evento){
    evento.target.style.background="white";
}

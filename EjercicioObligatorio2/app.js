const personas = [
    new Persona('Juan', 'Perez'),
    new Persona('Karla', 'Lara'),
];

const agregar = document.getElementById("agregar");
const quitar = document.getElementById("quitar");
const borrar = document.getElementById("borrar");

agregar.addEventListener("click",agregarPersona);
quitar.addEventListener("click",quitarPersona);
borrar.addEventListener("click",eliminarLista);


function mostrarPersonas(){
    let texto = '';
    let i=1;
    for(let persona of personas){
        texto += `<li>${i}.- ${persona.nombre} ${persona.apellido}</li>`;
        i++;
    }
    document.getElementById('personas').innerHTML = texto;
}  

function agregarPersona(){
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");

    if(!nombre.value || !apellido.value){
        alert("Algo está vacío")
    }else{
        const persona = new Persona(nombre.value,apellido.value);
        personas.push(persona);
        mostrarPersonas();
    }
}

function quitarPersona(){

    const posicion = document.getElementById("posicion").value;

    if(posicion>0){
        if(personas.length>=posicion){
            personas.splice(posicion-1,1)
            mostrarPersonas()

        }else{
            alert("Posición Invalida")
        }
    }else{
        alert("Posición Invalida")

    }

    // for (let x = 0; x < personas.length; x++) {
    //     const element = array[x];
        
    // }

}

function eliminarLista(){
    if(personas.length>0){
        const eliminar = (personas.value);
        personas.splice(eliminar);
        mostrarPersonas();
    }
}
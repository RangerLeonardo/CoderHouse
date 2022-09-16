//empezamos con el js
//tareas a realizar, hacer visible el icono arriba del carrito
//añadir cada elemento que tengamos al carrito
//hacer una pagina nueva con todo lo que seleccionamos 
//mostrar el total 
//darle diseño a la pagina
const items = document.getElementById("items")
const templateCard = document.getElementById("template-card").content
const fragment = document.createDocumentFragment()
const span = document.getElementById("objetos-carrito")
const insertarH1 = document.getElementById("paraCompartir")
insertarH1.innerHTML = `${"<h1>Para Compartir</h1>"}`;

let contador = 0;



items.addEventListener("click", e =>{
    carrito(e);
})

document.addEventListener("DOMContentLoaded",()=>{
    fetchData()
})

const fetchData = async () =>{
    try {
        const res= await fetch("../json/api.json")
        const data = await res.json()
        imprimirTemplate(data)
    } catch (error) {
        console.log(error)
    }
}

const imprimirTemplate = data => {
    data.forEach(producto => {
        templateCard.querySelector("h2").textContent = producto.title;
        templateCard.querySelector(".descripcion").textContent =producto.descripcion;
        templateCard.querySelector(".precio").textContent ="Precio: "+ producto.precio;
        templateCard.querySelector("img").setAttribute("src",producto.thumbnailURL);
        templateCard.querySelector(".btn-agregar").dataset.id = producto.id;
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)
}

const carrito = e =>{
    if(e.target.classList.contains("btn-agregar")){
        setCarrito(e.target.parentElement)
        contador++;
        span.innerHTML=`${contador}`
    }

    if(contador!=0){
        span.style.visibility ="visible"
    }
    e.stopPropagation()
}

const setCarrito = objeto =>{
    const producto ={
        id:objeto.querySelector(".btn-agregar").dataset.id,
        title:objeto.querySelector("h2").textContent,
        precio:objeto.querySelector(".precio").textContent,
        cantidad:1
    }
    if(carrito.hasOwnProperty(producto.id)){
        // contador--; meterlo cuando haga el carrito visible
        producto.cantidad=carrito[producto.id].cantidad+1
    }

    carrito[producto.id]={...producto}
    console.log(producto)
}

console.log(localStorage)

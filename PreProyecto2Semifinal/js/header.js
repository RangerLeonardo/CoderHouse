const navegador = document.getElementById("barra-fixed");
const hotdogs = document.getElementById("hotdogs_index");


navegador.addEventListener("scroll",function(){
    console.log("Hola")
})

window.addEventListener("scroll",function(){
    //722 top es cuando llegamos al primer menu de hotdogs
    console.log(hotdogs.getBoundingClientRect())
    if(hotdogs.getBoundingClientRect().top<120){
        navegador.classList.add("activo");
    }else{
        navegador.classList.remove("activo");
    }


});

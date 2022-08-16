function sumar(){
    const form = document.getElementById("form");
    let operandoA = form["operandoA"];
    let operandoB = form["operandoB"];

    let resultado = parseInt(operandoA.value)+parseInt(operandoB.value);
    document.getElementById("resultado").innerHTML=`Resultado: ${resultado}`;
    if(!resultado){
        document.getElementById("resultado").innerHTML="No añadiste números";
    }
} 

function restar(){
    const form = document.getElementById("form");
    let operandoA = form["operandoA"];
    let operandoB = form["operandoB"];

    let resultado = parseInt(operandoA.value)-parseInt(operandoB.value);
    document.getElementById("resultado").innerHTML=`Resultado: ${resultado}`;
    if(!resultado){
        document.getElementById("resultado").innerHTML="No añadiste números";
    }
    if(resultado==0){
        document.getElementById("resultado").innerHTML="Resultado: 0";
    }
} 

function multiplicar(){
    const form = document.getElementById("form");
    let operandoA = form["operandoA"];
    let operandoB = form["operandoB"];

    let resultado = parseInt(operandoA.value)*parseInt(operandoB.value);
    document.getElementById("resultado").innerHTML=`Resultado: ${resultado}`;
    if(!resultado){
        document.getElementById("resultado").innerHTML="No añadiste números";
    }
} 

function dividir(){
    const form = document.getElementById("form");
    let operandoA = form["operandoA"];
    let operandoB = form["operandoB"];

    let resultado = parseInt(operandoA.value)/parseInt(operandoB.value);
    document.getElementById("resultado").innerHTML=`Resultado: ${resultado}`;
    if(!resultado){
        document.getElementById("resultado").innerHTML="No añadiste números validos";
    }
} 


//multiplos de 3 = fizz  multiplos de 5 == buzz  multiplos de 3 y 5 = fizzbuzz

function ciclo() {
    const formCiclo = document.getElementById("formCiclo");
    let limiteCiclo=formCiclo["limiteCiclo"]
    let resultado=parseInt(limiteCiclo.value);

    if(resultado<=0){
        document.getElementById("resultadoCiclo").innerHTML="No es un número valido";
    }

    let arreglo=[]
    for (let i = 0; i < resultado; i++) {
        arreglo[i]=i+1;

        if(arreglo[i]%5==0 && arreglo[i]%3==0){
            arreglo[i]="FizzBuzz"
        }else if(arreglo[i]%5==0){
            arreglo[i]="Buzz"
        }else if(arreglo[i]%3==0){
            arreglo[i]="Fizz"
        }
        
    }
    for (let z = 0; z < arreglo.length; z++) {
        document.getElementById("resultadoCiclo").innerHTML=`${arreglo}`;

    }


    
}
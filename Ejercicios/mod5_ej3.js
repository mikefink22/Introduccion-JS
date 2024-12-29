// Desarrolla una librería Calculadora que calcula las longitudes de varias figuras geométricas como cuadrados, rectángulos y círculos.

function longitudCuadrado(lado){

    return lado*4;

}

function longitudRectangulo(base, altura){

    return (base*2)+(altura*2);

}

function longitudCirculo(radio){

    return 2*Math.PI*radio;

}

const calculadora = {cuadrado:longitudCuadrado, rectangulo:longitudRectangulo,circulo:longitudCirculo};   

console.log(calculadora.cuadrado(5));


function hola(){
    console.log("Hola");
}

function adios(){
    console.log("Adios");
}


var Persona = {
    hola: function(){
        console.log("Hola Hola ");
    },
    adios:adios
};

Persona.hola();



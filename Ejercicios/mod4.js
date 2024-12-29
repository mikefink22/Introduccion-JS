// Declaracion de funciones en JS


function puntua(mano){
    var total = 0;
    for (var i=0; i<mano.length;i=i+1){
        total = total+mano[i]; //accedemos al valor de la carta
    }
    return total;
}

mano = [10,9,8,7];

let puntuacion=puntua(mano);

console.log("La puntuación total es de: ",puntuacion);

// Llamada a funciones y estructura de un programa

function puntuaCarta(carta){
    var puntuacion = carta;

    if (carta===1){
        puntuacion = 20;
    }
    return puntuacion;
}

function puntuaMano(mano){
    let total = 0;
    for (var i=0; i<mano.length;i=i+1){
        total = total+puntuaCarta(mano[i]); //accedemos al valor de la carta
    }
    return total;
}

function imprimePuntuacion(puntuacion){
    console.log("La puntuación de la mano es:",puntuacion);
}

function programa(){
    let mano = [10,5,4,1,2];
    let puntuacion = puntuaMano(mano);
    imprimePuntuacion(puntuacion);
}

programa();
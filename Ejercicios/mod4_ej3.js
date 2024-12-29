// Desarrolla un programa que use la función anterior para puntuar las manos de cartas de dos jugadores e imprima por consola al ganador, es decir, al que obtenga mayor puntuación.

const mano1 = [
    {palo: "Corazones", valor:10},
    {palo: "Corazones", valor:1},
    {palo: "Tréboles", valor:5},
]
console.log("Mano del primer jugador: ",mano1);


const mano2 = [
    {palo: "Picas", valor:10},
    {palo: "Picas", valor:1},
    {palo: "Diamantes", valor:5},
]
console.log("Mano del segundo jugador: ",mano2);


function puntuaCarta(carta){
    var puntuacion = carta.valor;

    if (carta.valor===1){
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




function imprimePuntuacion(puntuacion1,puntuacion2){
    if (puntuacion1<puntuacion2){
        console.log(`El ganador es Jugador 2`);
    } else {if (puntuacion1>puntuacion2){
        console.log(`El ganador es Jugador 1`);
    } else {
        console.log("Es un empate!!");
    }
    
}
}

function programa(mano1, mano2){
    let puntuacion1 = puntuaMano(mano1);
    let puntuacion2 = puntuaMano(mano2);
    
    imprimePuntuacion(puntuacion1,puntuacion2);
}

programa(mano1,mano2);

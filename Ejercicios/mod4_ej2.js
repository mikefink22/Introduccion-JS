// Partiendo de la función anterior, modíficala para que además las cartas rojas sumen el doble. Prueba a invocarla con varias manos de cartas.

const mano1 = [
    {palo: "Corazones", valor:10},
    {palo: "Corazones", valor:1},
    {palo: "Tréboles", valor:5},
]

const mano2 = [
    {palo: "Picas", valor:7},
    {palo: "Corazones", valor:2},
    {palo: "Tréboles", valor:5},
]

const mano3 = [
    {palo: "Diamantes", valor:1},
    {palo: "Corazones", valor:1},
    {palo: "Tréboles", valor:2},
]

function puntuaCarta(carta){
    var puntuacion = carta.valor;

    if (carta.valor===1){
        puntuacion = puntuacion*20;
    }

    if (carta.palo==="Diamantes" || carta.palo==="Corazones"){
        puntuacion = 2*puntuacion;
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


function imprimePuntuacion(puntuacion,nombreMano){
    console.log(`La puntuación de la mano ${nombreMano} es:`,puntuacion);
}

function programa(mano,nombreMano){
    let puntuacion = puntuaMano(mano);
    imprimePuntuacion(puntuacion,nombreMano);
}

programa(mano1,`1`);
programa(mano2,"2");
programa(mano3,"3");
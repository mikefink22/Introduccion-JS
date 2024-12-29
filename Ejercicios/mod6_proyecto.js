// os proponemos construir un juego de Blackjack.
// Vamos a modelar 3 objetos para construir este juego:
// 1. la baraja, un conjunto de cartas con un valor y un palo
// 2. el croupier tendrá la baraja, y es el encargado de barajar, dar las manos y puntuar; en el Blackjack el croupier también juega, así que él mismo también tiene una mano de cartas
// 3. el jugador pide una carta o se planta; cuando se planta, acaba el juego y el croupier calcula quién ha ganado

const prompt = require('prompt-sync')();

//Creamos Mazo
function crearMazo(){
    let indice = 0;
    const palos = "cept";
    const baraja = [];
    for (let i=0;i<palos.length;i=i+1){
        for (let j=1;j<=13;j=j+1){

            let cartaValor = j;
            let cartaNombre = j.toString();

            switch (j) {
                case 1:
                    cartaNombre = "A";
                    cartaValor = 11;
                    break;
                case 11: 
                    cartaNombre = "J";
                    cartaValor = 10;
                    break;
                case 12: cartaNombre = "Q";cartaValor = 10; break;
                case 13: cartaNombre = "K";cartaValor = 10; break;
            }
            baraja[indice]={valor:cartaValor, palo:palos[i], carta:cartaNombre};
            indice++;
        }
    } 
    return baraja;
}

const baraja=crearMazo();

// Mezclamos Baraja
function barajarMazo(baraja,cantidad){
    
    
    let totalCartas = baraja.length;

    for (let i=0; i<cantidad; i=i+1){

        let j = Math.floor(Math.random()*totalCartas);
        let k = Math.floor(Math.random()*totalCartas);

        // nos aseguramos que j y k sean diferentes
        while(j===k){
            k = Math.floor(Math.random()*totalCartas);
        }
        [baraja[j],baraja[k]]=[baraja[k],baraja[j]];
    }
    return baraja
}

let barajaMezclada = barajarMazo(baraja,1000);

// Una vez mezclada vamos a repartir, eliminando la primera carta

function repartirUnaCarta(barajaMezclada){

    let baraja = barajaMezclada;
    const primeraCarta = barajaMezclada[0];
    const nuevaBaraja = [];
    
    //console.log(primeraCarta);
    //console.log("Segunda carta",baraja[1]);

    for (let i=1; i<barajaMezclada.length; i=i+1){
        nuevaBaraja[nuevaBaraja.length] = barajaMezclada[i];
        
    }
    
    baraja = nuevaBaraja;
    //console.log("Debería ser igual a primera carta ahora: ",baraja[0]);
    //console.log(baraja.length); //comprobación de que ahora la baraja tiene una carta menos
    return {baraja: baraja, carta: primeraCarta}
}

//console.log(repartir(barajaMezclada));

function repartirManos(barajaMezclada){

    // supongo que uso un mazo completo cada vez que reparto 4 cartas a cada jugador

    const manos = [[],[]]; //inicializamos manos de los 2 jugadores
    let puntuacionCroupier = 0;
    let contador = 0;

    do {
        manoJug1 = repartirUnaCarta(barajaMezclada);
        manos[0].push(manoJug1.carta);
        barajaMezclada = manoJug1.baraja;
        contador++;

    

        console.log("Mano Jugador 1: ",manos[0]);

        if (puntuacionCroupier<=17){
        manoCroupier = repartirUnaCarta(barajaMezclada);
        manos[1].push(manoCroupier.carta);
        barajaMezclada = manoCroupier.baraja;
        puntuacionCroupier += manoCroupier.carta.valor;
        }        
        

        console.log("Mano Croupier: ",manos[1]);

        otraCarta = prompt("¿Quieres otra carta? (s/n)");
        
    } while (otraCarta === "s");

    while (puntuacionCroupier<17){
        manoCroupier = repartirUnaCarta(barajaMezclada);
        manos[1].push(manoCroupier.carta);
        barajaMezclada = manoCroupier.baraja;
        puntuacionCroupier += manoCroupier.carta.valor;
    }
          
   // console.log("Mano 1: ",manos[0]);
   // console.log("Mano 2: ",manos[1]);

    return manos

}

//manos = repartirManos(barajaMezclada);
//console.log(manos);


function puntuar(manos){
    let puntuaciones=[0,0];
    
    for (let jugador=0;jugador<manos.length;jugador++){

        let valoresCartas = [];
        let numAses = 0;

        for (let carta=0;carta<manos[jugador].length;carta++){

                puntuaciones[jugador] += manos[jugador][carta].valor;
                valoresCartas.push(manos[jugador][carta].valor);

                if (manos[jugador][carta].valor === 11){
                    numAses++;
                }

                              

        }
       
              
    }

    while (puntuaciones > 21 && numAses > 0) {
        if (manos[jugador][carta].valor === 11) {
            puntuaciones[jugador] -= 10;
            numAses--;
        }
        
      }
    

    if ((puntuaciones[0]>puntuaciones[1] && puntuaciones[0]<=21)|| puntuaciones[1]>21 && puntuaciones[0]<=21){
        puntajeGanador = puntuaciones[0];
        ganador = "Gana el Jugador";
    } else if (puntuaciones[0]===puntuaciones[1]){ 
        ganador = "Es un empate,";
    } else {

        ganador = "Gana el Croupier";
        puntajeGanador = puntuaciones[1];

    }
    return {puntuacion1:puntuaciones[0], puntuacion2:puntuaciones[1], ganador:ganador, puntajeGanador:puntajeGanador}
}

//let puntuacion = puntuar(manos);
//console.log("El ganador es el ",puntuacion.ganador, "con ",puntuacion.puntajeGanador, " puntos");

var Croupier = {reparteManos:repartirManos, puntua:puntuar};

function jugarManoConCroupier() {
    let barajaMezclada = barajarMazo(crearMazo(), 1000);
    const manos = Croupier.reparteManos(barajaMezclada); // Usando Croupier.reparteManos()
    const puntuacion = Croupier.puntua(manos); // Usando Croupier.puntua()

    console.log("Resultado de la mano (con Croupier):");
    console.log("Mano del Jugador 1:", manos[0]);
    console.log("Mano del Croupier:", manos[1]);
    console.log("La puntuación del Jugador es",puntuacion.puntuacion1)
    console.log("La puntuación del Croupier es",puntuacion.puntuacion2)
    console.log(puntuacion.ganador, "con", puntuacion.puntajeGanador, "puntos.");
}

jugarManoConCroupier(); // Llamada a la función que usa el Croupier
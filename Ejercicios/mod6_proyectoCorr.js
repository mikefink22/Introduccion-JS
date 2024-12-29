// para corregir el codigo:

const prompt = require('prompt-sync')();

// ... (funciones crearMazo, barajarMazo y repartirUnaCarta - sin cambios)

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

function repartirManos(barajaMezclada) {
    const manos = [[], []];

    for (let i = 0; i < 2; i++) {
        let repartoJugador = repartirUnaCarta(barajaMezclada);
        manos[0].push(repartoJugador.carta);
        barajaMezclada = repartoJugador.baraja;

        let repartoCroupier = repartirUnaCarta(barajaMezclada);
        manos[1].push(repartoCroupier.carta);
        barajaMezclada = repartoCroupier.baraja;
    }

    console.log("Mano Jugador 1: ", manos[0]);
    console.log("Mano Croupier: ", manos[1]);



    let otraCarta;
    do {
        let puntuacion = calcularPuntuacionConAses(manos[0]);
        console.log("Puntuación: ", puntuacion);
        puntuacion = calcularPuntuacionConAses(manos[1]);
        console.log("Puntuación del Croupier: ", puntuacion);
        otraCarta = prompt("¿Quieres otra carta? (s/n)");
        if (otraCarta === "s") {
            let reparto = repartirUnaCarta(barajaMezclada);
            manos[0].push(reparto.carta);
            barajaMezclada = reparto.baraja;
            console.log("Mano Jugador 1: ", manos[0]);
            
        }
    } while (otraCarta === "s");

    while (calcularPuntuacionConAses(manos[1], true) < 17) {
        let reparto = repartirUnaCarta(barajaMezclada);
        manos[1].push(reparto.carta);
        barajaMezclada = reparto.baraja;
        console.log("Mano Croupier: ", manos[1]);
        
    }

    return manos;
}

function calcularPuntuacionConAses(mano, esCroupier = false) {
    let valor = 0;
    let numAses = 0;

    for (const carta of mano) {
        switch (carta.valor) {
            case 11:
                valor += 11;
                numAses++;
                break;
            case 10:
                valor += 10;
                break;
            default:
                valor += carta.valor;
        }
    }

    while (valor > 21 && numAses > 0) {
        valor -= 10;
        numAses--;
    }

    if (esCroupier && valor > 21 && mano.some(carta => carta.carta === 'A')) {
      valor -= 10
    }

    return valor;
}

function puntuar(manos) {
    let puntuaciones = [
      calcularPuntuacionConAses(manos[0]), 
      calcularPuntuacionConAses(manos[1], true)
    ];

    let ganador;
    let puntajeGanador;

    if ((puntuaciones[0] > puntuaciones[1] && puntuaciones[0] <= 21) || (puntuaciones[1] > 21 && puntuaciones[0] <= 21)) {
        puntajeGanador = puntuaciones[0];
        ganador = "Gana el Jugador";
    } else if (puntuaciones[0] === puntuaciones[1]) {
        ganador = "Es un empate";
        puntajeGanador = puntuaciones[0];
    } else {
        ganador = "Gana el Croupier";
        puntajeGanador = puntuaciones[1];
    }
    return { puntuacion1: puntuaciones[0], puntuacion2: puntuaciones[1], ganador: ganador, puntajeGanador: puntajeGanador };
}

// ... (resto del código)

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
    console.log("----------------------------------");
    console.log(puntuacion.ganador, "con", puntuacion.puntajeGanador, "puntos.");

    return {ganaJugador:puntuacion.ganador === "Gana el Jugador", empate:puntuacion.ganador === "Es un empate"};
}

function jugarManosHastaParar() {
    let manosGanadas = 0;
    let manosJugadas = 0;
    let manosEmpatadas = 0;
    //let condicion = true;
    while(true) {
        console.log("Mano número:", manosJugadas + 1);
        console.log("----------------------------");

        const resultadoMano = jugarManoConCroupier(); // Llamada a la función que usa el Croupier

        if (resultadoMano.ganaJugador) {
            manosGanadas++;
        } else if (resultadoMano.empate) {
            manosEmpatadas++;
        }
        
        manosJugadas++;
        
        console.log("Manos ganadas:", manosGanadas, "de", manosJugadas, ". Empates: ",manosEmpatadas), "\n";
        console.log("-------------------------------------------------------");
        
        let respuesta = prompt("Desea jugar otra mano? (s/n)", "\n");
        if (respuesta === "n") {
            break;
        }

        console.log("Fin de la mano", manosJugadas);
        console.log("--------------------------");
        
    }
    console.log("----------------------------");
    console.log("Fin del juego. Has ganado", manosGanadas, "de", manosJugadas, "manos.");
    console.log("Hubo un empate en", manosEmpatadas, "manos.")   
    console.log("Gracias por jugar!");
}
jugarManosHastaParar();

    
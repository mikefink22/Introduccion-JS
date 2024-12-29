//Desarrolla nuevas funciones de la librería Croupier: Repartir, que toma la carta en primera posición de la baraja y la elimina del array. Puntuar que, dada una mano de 4 cartas sume su valor. Pero si todas las cartas son iguales, multiplica el valor por 10.

function obtenerPaloAleatorio() {
    const palos = ["c", "e", "p", "t"]; // Array con los palos
    const indiceAleatorio = Math.floor(Math.random() * palos.length); // Genera un índice entre 0 y 3
    return palos[indiceAleatorio]; // Devuelve el palo correspondiente al índice
}

function obtenerValorAleatorio() {
    const valor = Math.floor(13*Math.random()+1); // Genera un índice entre 1 y 13
    return valor; // Devuelve el valor
}

// Reparte Cartas(burdo)

//let cartas = [{palo:obtenerPaloAleatorio(),valor:obtenerValorAleatorio()},{palo:obtenerPaloAleatorio(),valor:obtenerValorAleatorio()},{palo:obtenerPaloAleatorio(),valor:obtenerValorAleatorio()},{palo:obtenerPaloAleatorio(),valor:obtenerValorAleatorio()}];

//console.log(cartas);

function barajarMensaje(cartas){
        return "Barajando..."
}

function repartirMensaje(cartas){

    return "Su carta, gracias"
}

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
                    cartaValor = 20;
                    break;
                case 11: cartaNombre = "J"; break;
                case 12: cartaNombre = "Q"; break;
                case 13: cartaNombre = "K"; break;
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

    for (let i=0; i<4; i++){
        manoJug1 = repartirUnaCarta(barajaMezclada);
        manos[0].push(manoJug1.carta);
        barajaMezclada = manoJug1.baraja;

        manoJug2 = repartirUnaCarta(barajaMezclada);
        manos[1].push(manoJug2.carta);
        barajaMezclada = manoJug2.baraja;
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

        for (let carta=0;carta<manos[jugador].length;carta++){
              puntuaciones[jugador] += manos[jugador][carta].valor;
        valoresCartas.push(manos[jugador][carta].valor)

        // Comprobación de si todas las cartas son iguales (multiplicar por 4)
        if (valoresCartas.length===4 && valoresCartas.every(val => val === valoresCartas[0])) {
        puntuaciones[jugador] *= 10; // Multiplica la puntuación por 4
        console.log(`¡El jugador ${jugador + 1} tiene 4 cartas iguales! Puntuación multiplicada por 10.`);
        }

        }
              
    }
     

    if (puntuaciones[0]>puntuaciones[1]){
        puntajeGanador = puntuaciones[0];
        ganador = "Jugador 1";
    } else {
        puntajeGanador = puntuaciones[1];
        ganador = "Jugador 2";
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
    console.log("Mano del Jugador 2:", manos[1]);
    console.log("La puntuación del primer jugador es",puntuacion.puntuacion1)
    console.log("La puntuación del segundo jugador es",puntuacion.puntuacion2)
    console.log("El ganador es el", puntuacion.ganador, "con", puntuacion.puntajeGanador, "puntos.");
}

jugarManoConCroupier(); // Llamada a la función que usa el Croupier



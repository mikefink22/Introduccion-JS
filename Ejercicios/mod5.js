// LIBRERÍAS DE CODIGO

let cartas = [{palo:"c",valor:1},{palo:"p",valor:6},{palo:"t",valor:7},{palo:"d",valor:10}];

function barajar(cartas){
        return "Barajando..."
}

function repartir(cartas){
    return "Su carta, gracias"
}

barajar(cartas);
console.log(repartir(cartas));

var Croupier = {baraja:barajar, reparte:repartir};

Croupier.baraja(cartas);
Croupier.reparte(cartas);




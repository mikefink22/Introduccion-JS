
// Programa un ejemplo que almacene en un array todas las cartas de la baraja, cada una representada con un diccionario que tenga un palo y un valor.

const palos = "CPDT";
const baraja= [];

for (let i=0; i<palos.length;i=i+1){
    for (let j=1; j<=13; j=j+1){
        baraja[baraja.length] = {valor:j,palo:palos[i]};
    }
}

console.log("------BARAJA--------");
console.log(baraja);

console.log("-------- Ejercicio 2 -------");
//Partiendo del array que has construido en el ejercicio anterior, construye un algoritmo que filtre en un nuevo array sólo las cartas rojas, y en otro array las cartas negras.

let rojas =[];
let negras = [];

for (let i=0; i<baraja.length;i=i+1){
    
        if (baraja[i].palo==="C" || baraja[i].palo==="D"){
            rojas[rojas.length] = baraja[i];
        } else { if (baraja[i].palo==="P" || baraja[i].palo==="T"){
            negras[negras.length] = baraja[i];

        }
    }
}

console.log("--Baraja Roja--");
console.log(rojas);
console.log("--Baraja Negra--");
console.log(negras);


console.log("-------- Ejercicio 3 -------");
// Partiendo del array que has construido en el ejercicio anterior, construye un algoritmo que filtre en un nuevo array las cartas rojas y pares. Luego imprime en la consola la última carta de ese nuevo array.

var rojasPares =[];

for (let i=0; i<rojas.length;i=i+1){
    if (rojas[i].valor%2===0){
        rojasPares[rojasPares.length]=rojas[i];
    }
}

console.log("--Baraja Rojas Pares--");
console.log(rojasPares);

console.log("Última Carta del Array Rojas Pares:");
console.log(rojasPares[rojasPares.length-1]);

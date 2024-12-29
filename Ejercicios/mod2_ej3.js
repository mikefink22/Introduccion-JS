
// Utiliza un bucle para recorrer todas las cartas de la baraja, desde el A al 13 de cada palo. Imprime en pantalla solamente las cartas rojas que sea múltiplos de 3.

console.log("Diamantes:");
for (var i=1; i<=13; i=i+1){
   
    if (i%3===0){ //imprime los diamantes 
        if (i!==12){
           console.log(i+"D")
        }
        if (i===12){
            console.log("Q"+"D")
        }

    }
}

console.log("Corazones:");
for (var i=1; i<=13; i=i+1){

    
    if (i%3===0){ //imprime los corazones 
        if (i!==12){
           console.log(i+"C")
        }
        if (i===12){
            console.log("Q"+"C")
        }

    }
}

// Solución del curso:

var baraja = "bpcd"; // Simula los palos

for (var i=0; i<baraja.length;i=i+1){ // recorre los palos
    for (var x=1; x<=13; x=x+1){
        if (baraja[i]==="c" && x%3===0){ //imprime los corazones
            if (x!==12){
               console.log(x+baraja[i], "es una carta roja de Corazones y múltiple de 3");
            }
            if (x===12){
                console.log("Q"+baraja[i], "es la reina de Corazones y múltiple de 3");
            }
        }
        if (baraja[i]==="d" && x%3===0){ //imprime los diamante
            if (x!==12){
               console.log(x+baraja[i], "es una carta roja de Diamante y múltiple de 3");
            }
            if (x===12){
                console.log("Q"+baraja[i], "es la reina de Diamantes y múltiple de 3");
            }
        }
        
    }

}
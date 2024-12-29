// Desarrolla una librería Croupier que tenga una función para barajar cartas. Para barajar, intercambiamos una carta aleatoria dentro de nuestra baraja por otra. Y esto lo hacemos 100 veces. Se recomienda usar la librería Math.random. Por ejemplo, intercambiar la carta en la posición 7 por la carta en la posición 24.

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

//console.log(baraja);


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

console.log("Barajando...");

console.log(barajaMezclada.length);
console.log(barajaMezclada);

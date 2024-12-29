// MODULO 6 - OBJETOS Y PROYECTO

const Croupier={};

Croupier.baraja = [{palo:"c","valor":1},{palo:"p","valor":6},{palo:"t","valor":7},{palo:"d","valor":10}];

Croupier.barajar = function(){
    this.baraja.reverse();
}

Croupier.barajar();

console.log(Croupier.baraja[0].palo);

Croupier.repartir = function(){
    console.log(this.baraja[0].valor," de ",this.baraja[0].palo);
    }

Croupier.repartir();

Croupier.puntuar = function(mano){
    let total = 0;
    for (let i=0; i<mano.length; i++){
        total += mano[i].valor;
    }
    return total;
}

const puntaje1 = Croupier.puntuar([{palo:"c","valor":1},{palo:"p","valor":6},{palo:"t","valor":7},{palo:"d","valor":10}]);

console.log("El puntaje de la mano es",puntaje1);
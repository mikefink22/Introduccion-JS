// Define una variable cuyo valor sea una cadena que represente una carta de la baraja. Recuerda que representamos las cartas con una cadena formada por un número que representa el valor, seguido de una letra que representa el palo. Ahora crea otras dos variables que representan a la carta anterior y a las carta posterior en una baraja ordenada. Finalmente, crea una última variable que concatene las cadenas de las 3 cartas anteriores usando las variables que ya tienes.

var carta = '7O';
console.log(carta);
var numero = parseInt(carta[0]);
var cartaAnterior = (numero-1)+carta[1];
console.log(cartaAnterior);
var cartaSiguiente = (numero+1)+carta[1];
console.log(cartaSiguiente);

// Concatenación de las tres cartas, "O" representa al palo Oros.

var cartas = cartaAnterior+","+carta+","+cartaSiguiente;
console.log(cartas);
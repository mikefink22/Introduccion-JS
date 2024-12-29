
// Define una variable cuyo valor sea una cadena que represente una carta de la baraja, cuyo valor sea mayor que 9. Ahora utiliza el operador para indexar la cadena, y accede al palo de la carta. ¿Cuál es la diferencia si la carta tiene un valor menor o igual que 9?

var carta = "10C";
var palo = carta[2];

console.log("Palo: ",palo);

console.log("Si la carta tiene un valor menor o igual que nueve, el índice del palo es [1]");